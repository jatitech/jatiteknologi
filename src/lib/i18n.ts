import { baseLocale, isLocale } from "@/paraglide/runtime";

/**
 * Get locale from Astro.currentLocale
 * @param locale {Astro.currentLocale}
 * @returns
 */
export const getLocale = (locale: string | undefined) =>
  isLocale(locale) ? locale : baseLocale;

/**
 * Format language tag
 * @param lang {string}
 * @returns
 */
export const formatLangTag = (lang: string) =>
  lang
    .split("-")
    .map((l, i) => (i === 0 ? l.toLowerCase() : l.toUpperCase()))
    .join("-");

export const toHumanReadableLang = (lang: Locale) => {
  const languageNames = new Intl.DisplayNames([lang], { type: "language" });
  return languageNames.of(lang);
};

/**
 * Get language icon
 * @param lang {Locale}
 * @returns
 */
export const getLangIcon = (lang: Locale) => {
  switch (lang) {
    case "ar":
      return "🇦🇪";
    case "de":
      return "🇩🇪";
    case "en":
      return "🇬🇧";
    case "es":
      return "🇪🇸";
    case "fr":
      return "🇫🇷";
    case "hi":
      return "🇮🇳";
    case "id":
      return "🇮🇩";
    case "it":
      return "🇮🇹";
    case "ja":
      return "🇯🇵";
    case "ko":
      return "🇰🇷";
    case "pl":
      return "🇵🇱";
    case "pt":
      return "🇵🇹";
    case "ru":
      return "🇷🇺";
    case "zh-cn":
      return "🇨🇳";
    case "zh-tw":
      return "🇹🇼";
    default:
      return "🌍";
  }
};
