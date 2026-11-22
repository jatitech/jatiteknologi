import { describe, expect, it } from "vite-plus/test";

import { dictionaryFor } from "../dictionary";

import { pageTexts, sharedTexts } from "./copy-texts";

/**
 * Words that must not describe Jatiteknologi next to a platform name: "partner", "mitra", "resmi",
 * "official", "Tech Provider", "Business Partner", and the abbreviations WA, IG, FB (the brand
 * names are written out in full). Matching is case-insensitive except for the abbreviations.
 */
const FORBIDDEN = [
  /\bpartner\b/i,
  /\bmitra\b/i,
  /\bresmi\b/i,
  /\bofficial\b/i,
  /\btech provider\b/i,
  /\bbusiness partner\b/i,
  /\bWA\b/,
  /\bIG\b/,
  /\bFB\b/,
];

/**
 * A sentence may name a forbidden word only when it also negates. "Jatiteknologi tidak berafiliasi
 * dengan Frappe" is an allowed disclaimer; "Kami mitra resmi Frappe" is not.
 */
const NEGATION = /\b(bukan|tidak|not|no)\b/i;

/** The sentences of `text` that name a forbidden word without negating it. */
function flaggedSentences(text: string): Array<string> {
  return text
    .split(/(?<=[.!?])\s+/)
    .filter((sentence) => FORBIDDEN.some((word) => word.test(sentence)))
    .filter((sentence) => !NEGATION.test(sentence));
}

const id = dictionaryFor("id").platform;
const en = dictionaryFor("en").platform;

const dictionaries = [id, en];

describe("forbidden self-descriptions", () => {
  it("flags a sentence that names a forbidden word without negating it", () => {
    expect(flaggedSentences("Kami mitra resmi Frappe. Kami membangun sistem.")).toEqual([
      "Kami mitra resmi Frappe.",
    ]);
  });

  it("allows a sentence that names a forbidden word in a negation", () => {
    expect(
      flaggedSentences(
        "Jatiteknologi adalah perusahaan independen, bukan Meta Business Partner atau Tech Provider.",
      ),
    ).toEqual([]);
  });

  it("finds no forbidden word in the platform copy of either locale", () => {
    for (const platform of dictionaries) {
      for (const copy of Object.values(platform.pages)) {
        for (const text of pageTexts(copy)) {
          expect(flaggedSentences(text), text).toEqual([]);
        }
      }

      for (const text of sharedTexts(platform.shared)) {
        expect(flaggedSentences(text), text).toEqual([]);
      }
    }
  });
});

describe("experience wording", () => {
  it("says each platform page has no case study yet", () => {
    for (const copy of Object.values(id.pages)) {
      expect(copy.experience.paragraphs.join(" ")).toMatch(/Kami belum punya studi kasus/);
    }

    for (const copy of Object.values(en.pages)) {
      expect(copy.experience.paragraphs.join(" ")).toMatch(
        /We don't have (a |client )?.*case stud(y|ies) yet/,
      );
    }
  });

  it("dates the founder's experience from 2016 on every page", () => {
    for (const copy of Object.values(id.pages)) {
      expect(copy.experience.paragraphs[0]).toContain("sejak 2016.");
    }

    for (const copy of Object.values(en.pages)) {
      expect(copy.experience.paragraphs[0]).toContain("since 2016.");
    }
  });
});
