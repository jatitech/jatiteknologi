import { LOCALES, localizedPath, type Locale } from "@/shared/i18n";

const LABEL: Record<Locale, string> = { id: "ID", en: "EN" };

/**
 * One segment per locale, in `LOCALES` order. A locale this page has no translation for links to
 * its home page instead, so every segment is a working link.
 */
export function languageOptions(
  current: Locale,
  alternates: Partial<Record<Locale, string>>,
): { locale: Locale; label: string; href: string; current: boolean }[] {
  return LOCALES.map((locale) => ({
    locale,
    label: LABEL[locale],
    href: alternates[locale] ?? localizedPath(locale, "home"),
    current: locale === current,
  }));
}
