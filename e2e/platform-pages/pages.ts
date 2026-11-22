import {
  dictionaryFor,
  localizedPath,
  PLATFORM_SLUGS,
  platformCopyFor,
} from "../../src/shared/i18n";
import type { Locale } from "../../src/shared/i18n";

/** One platform page in one locale: its path and its copy. */
export interface PlatformPage {
  locale: Locale;
  slug: (typeof PLATFORM_SLUGS)[number];
  path: string;
  copy: ReturnType<typeof platformCopyFor>;
  shared: ReturnType<typeof dictionaryFor>["platform"]["shared"];
}

/** All six platform pages in both locales, Indonesian first. */
export const PLATFORM_PAGES: Array<PlatformPage> = (["id", "en"] as const).flatMap((locale) =>
  PLATFORM_SLUGS.map((slug) => ({
    locale,
    slug,
    path: localizedPath(locale, slug),
    copy: platformCopyFor(locale, slug),
    shared: dictionaryFor(locale).platform.shared,
  })),
);
