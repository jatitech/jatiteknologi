import { describe, expect, it } from "vite-plus/test";

import { dictionaryFor } from "../dictionary";
import { PLATFORM_SLUGS } from "../routes";

import { pageTexts, sharedTexts, sourceHrefs } from "./copy-texts";
import type { PlatformCard, PlatformCopy } from "./types";

const id = dictionaryFor("id").platform;
const en = dictionaryFor("en").platform;

const idPages = new Map(Object.entries(id.pages));
const enPages = new Map(Object.entries(en.pages));

/** Every card of a page: the problems, the limits, and the extra section. */
function cardsOf(copy: PlatformCopy): PlatformCard[] {
  return [...copy.problems.items, ...copy.limits.items, ...(copy.extra?.items ?? [])];
}

/**
 * The structure of a page without its text: which parts exist, how many items each list has, and
 * which cards carry a source. Two locales of one page must have the same structure.
 */
function layoutOf(copy: PlatformCopy) {
  const card = (item: PlatformCard) => ({ source: item.source !== undefined });

  return {
    chips: copy.hero.chips?.length ?? null,
    problems: copy.problems.items.map(card),
    builds: copy.builds.items.length,
    extra:
      copy.extra === undefined
        ? null
        : { items: copy.extra.items.map(card), link: copy.extra.link?.to ?? null },
    flow: copy.flow.notes.length,
    limits: copy.limits.items.map(card),
    experience: copy.experience.paragraphs.length,
  };
}

/** The English page for an Indonesian slug. A missing English page fails the test. */
function englishPageOf(slug: string): PlatformCopy {
  const copy = enPages.get(slug);

  if (copy === undefined) throw new Error(`No English page for ${slug}`);

  return copy;
}

describe("platform copy in both locales", () => {
  it("has the same pages in Indonesian and English", () => {
    expect([...enPages.keys()].sort()).toEqual([...idPages.keys()].sort());
  });

  it("names only platforms that have a route", () => {
    expect(PLATFORM_SLUGS).toEqual(expect.arrayContaining([...idPages.keys()]));
  });

  it("has the same number of visible strings in each page", () => {
    for (const [slug, indonesian] of idPages) {
      expect(pageTexts(englishPageOf(slug)).length, slug).toBe(pageTexts(indonesian).length);
    }
  });

  it("has the same number of visible strings in the shared copy", () => {
    expect(sharedTexts(en.shared).length).toBe(sharedTexts(id.shared).length);
  });

  it("gives each source the same address in both locales", () => {
    for (const [slug, indonesian] of idPages) {
      expect(sourceHrefs(englishPageOf(slug)), slug).toEqual(sourceHrefs(indonesian));
    }
  });
});

describe("platform copy", () => {
  it("fills every visible string", () => {
    for (const locale of [id, en]) {
      for (const copy of Object.values(locale.pages)) {
        expect(pageTexts(copy).some((text) => text.trim() === "")).toBe(false);
      }

      expect(sharedTexts(locale.shared).some((text) => text.trim() === "")).toBe(false);
    }
  });

  it("pairs each problem with one solution", () => {
    for (const copy of [...idPages.values(), ...enPages.values()]) {
      expect(copy.builds.items.length).toBe(copy.problems.items.length);
    }
  });

  it("keeps each lead under 160 characters, the meta description length", () => {
    for (const copy of [...idPages.values(), ...enPages.values()]) {
      expect(copy.hero.lead.length).toBeLessThanOrEqual(160);
    }
  });

  it("links every source to an https address", () => {
    for (const copy of [...idPages.values(), ...enPages.values()]) {
      for (const href of sourceHrefs(copy)) {
        expect(href.startsWith("https://")).toBe(true);
      }
    }
  });

  it("links an extra section only to a page that exists in both locales", () => {
    for (const [slug, copy] of idPages) {
      const target = copy.extra?.link?.to;

      if (target === undefined) continue;
      expect(PLATFORM_SLUGS).toContain(target);
      expect(idPages.has(target), `${slug} -> ${target}`).toBe(true);
      expect(enPages.has(target), `${slug} -> ${target}`).toBe(true);
      expect(target, slug).not.toBe(slug);
    }
  });

  it("gives every card with a figure a source", () => {
    const figure = /\d/;

    for (const copy of [...idPages.values(), ...enPages.values()]) {
      for (const card of cardsOf(copy)) {
        if (figure.test(`${card.title} ${card.description}`)) {
          expect(card.source, card.title).toBeDefined();
        }
      }
    }
  });

  it("dates every source label with a year", () => {
    for (const copy of [...idPages.values(), ...enPages.values()]) {
      for (const card of cardsOf(copy)) {
        if (card.source) expect(card.source.label, card.source.href).toMatch(/\b20\d{2}\b/);
      }
    }
  });

  it("leaves out the items docs/platform-pages.md lists as unverified", () => {
    const LEFT_OUT = [/escrow/i, /checkout\.liquid/i, /Threads API/i, /Tokopedia API/i];

    for (const platform of [id, en]) {
      for (const copy of Object.values(platform.pages)) {
        for (const text of pageTexts(copy)) {
          for (const pattern of LEFT_OUT) expect(text, pattern.source).not.toMatch(pattern);
        }
      }
    }
  });

  it("gives each locale the same shape for every page", () => {
    for (const [slug, indonesian] of idPages) {
      expect(layoutOf(englishPageOf(slug)), slug).toEqual(layoutOf(indonesian));
    }
  });
});
