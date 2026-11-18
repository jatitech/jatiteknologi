/** Locales the site serves. `id` is the default and has no path prefix. */
export const LOCALES = ["id", "en"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "id";

/** Values of `og:locale`. */
export const OG_LOCALE: Record<Locale, string> = { id: "id_ID", en: "en_US" };
