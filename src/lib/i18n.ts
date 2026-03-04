import { baseLocale, isLocale } from "@/paraglide/runtime";

/**
 * Get locale from Astro.currentLocale
 * @param locale {Astro.currentLocale}
 * @returns
 */
export const getLocale = (locale: string | undefined) =>
  isLocale(locale) ? locale : baseLocale;

export const formatLangTag = (lang: string) =>
  lang
    .split("-")
    .map((l, i) => (i === 0 ? l.toLowerCase() : l.toUpperCase()))
    .join("-");
