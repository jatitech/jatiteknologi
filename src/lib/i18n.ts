import type { Locale } from "@/paraglide/runtime";

/**
 * Get locale from Astro.currentLocale
 * @param locale {Astro.currentLocale}
 * @returns 
 */
export const getLocale = (locale: string | undefined) => (locale || "en") as Locale