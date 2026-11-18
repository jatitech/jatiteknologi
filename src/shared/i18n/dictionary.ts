import { en } from "./en";
import { id, type Dictionary } from "./id";
import type { Locale } from "./locale";
import type { PlatformCopy } from "./platform/types";
import { localizedPath, PLATFORM_SLUGS } from "./routes";

/** The interface strings for a locale. */
export function dictionaryFor(locale: Locale): Dictionary {
  return locale === "en" ? en : id;
}

/** A platform whose page has copy. A slug joins this type when its copy is written. */
export type PlatformPageSlug = keyof Dictionary["platform"]["pages"];

/** The copy for one platform page, for example `platformCopyFor("en", "frappe-erpnext")`. */
export function platformCopyFor(locale: Locale, slug: PlatformPageSlug): PlatformCopy {
  return dictionaryFor(locale).platform.pages[slug];
}

/** The header and footer link to each platform page, in the order of the home page's tiles. */
export function platformLinks(locale: Locale): { href: string; label: string }[] {
  return PLATFORM_SLUGS.map((slug) => ({
    href: localizedPath(locale, slug),
    label: platformCopyFor(locale, slug).name,
  }));
}

/**
 * Document title for a page. The home page passes no page and gets the site title alone; every
 * other page is `{page} · Jatiteknologi`.
 */
export function pageTitle(locale: Locale, page?: string): string {
  const strings = dictionaryFor(locale);

  return page === undefined ? strings.meta.siteTitle : strings.meta.title(page);
}
