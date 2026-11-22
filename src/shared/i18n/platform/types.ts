import type { PlatformSlug } from "../routes";

/** The document behind a claim. `label` is the visible copy, `href` the address of the document. */
export interface PlatformSource {
  label: string;
  href: string;
}

/** A card with a title, a description, and an optional source label. */
export interface PlatformCard {
  title: string;
  description: string;
  source?: PlatformSource;
}

/** One solution row. Solutions and problems pair by position: item N answers problem N. */
interface PlatformStep {
  title: string;
  description: string;
}

/** The optional section between the solutions and the flow, with an optional link to another platform page. */
interface PlatformExtra {
  eyebrow: string;
  title: string;
  items: ReadonlyArray<PlatformCard>;
  link?: { label: string; to: PlatformSlug };
}

/** Copy for one platform page. Every platform fills this type, so one template renders all of them. */
export interface PlatformCopy {
  /** The brand name as the page writes it, for example "Frappe dan ERPNext". */
  name: string;
  hero: {
    eyebrow: string;
    headline: string;
    /** Also the page's meta description, so keep it under 160 characters. */
    lead: string;
    /** Text-only chips under the lead, for pages that list apps. */
    chips?: ReadonlyArray<string>;
    /** The line under the buttons: independence, and the platform's trademark notice. */
    nonAffiliation: string;
  };
  problems: {
    title: string;
    items: ReadonlyArray<PlatformCard>;
  };
  builds: {
    items: ReadonlyArray<PlatformStep>;
  };
  extra?: PlatformExtra;
  flow: {
    layer: string;
    system: string;
    notes: ReadonlyArray<string>;
  };
  limits: {
    eyebrow: string;
    title: string;
    items: ReadonlyArray<PlatformCard>;
  };
  experience: {
    paragraphs: ReadonlyArray<string>;
  };
}

/** Copy that every platform page shares: the headings and text that do not change between platforms. */
export interface PlatformShared {
  breadcrumb: { label: string; home: string };
  actions: { email: string };
  problems: { eyebrow: string };
  builds: { eyebrow: string; title: string; description: string };
  flow: { eyebrow: string; title: string };
  experience: { eyebrow: string; title: string; processLink: string };
  terms: { eyebrow: string; title: string; items: ReadonlyArray<PlatformCard> };
  closing: { headline: string; disclaimer: string };
}

/** The platform part of a locale's dictionary: the shared copy and each page's copy by slug. */
export interface PlatformDictionary {
  shared: PlatformShared;
  pages: Partial<Record<PlatformSlug, PlatformCopy>>;
}
