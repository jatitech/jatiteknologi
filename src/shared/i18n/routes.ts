import { DEFAULT_LOCALE, type Locale } from "./locale";

/** Path prefix of a locale: none for the default locale, `/en` for English. */
const prefixOf = (locale: Locale) => (locale === DEFAULT_LOCALE ? "" : `/${locale}`);

/** The segment before a platform slug: `/integrasi/<slug>` in Indonesian, `/en/integrations/<slug>` in English. */
const INTEGRATION_SEGMENT: Record<Locale, string> = { id: "integrasi", en: "integrations" };

const platformPage = (slug: string) => (locale: Locale) =>
  `${prefixOf(locale)}/${INTEGRATION_SEGMENT[locale]}/${slug}`;

/** The platform slugs. Each has a route in both locales. A page exists only where its copy does. */
export const PLATFORM_SLUGS = [
  "frappe-erpnext",
  "odoo",
  "meta",
  "shopify",
  "shopee",
  "tiktok-shop",
] as const;

export type PlatformSlug = (typeof PLATFORM_SLUGS)[number];

/** Route builders. Add a route here, then build its links with `localizedPath`. */
const ROUTES = {
  home: (locale: Locale) => prefixOf(locale) || "/",
  notFound: (locale: Locale) => `${prefixOf(locale)}/404`,
  "frappe-erpnext": platformPage("frappe-erpnext"),
  odoo: platformPage("odoo"),
  meta: platformPage("meta"),
  shopify: platformPage("shopify"),
  shopee: platformPage("shopee"),
  "tiktok-shop": platformPage("tiktok-shop"),
} satisfies Record<"home" | "notFound" | PlatformSlug, (locale: Locale) => string>;

type RouteName = keyof typeof ROUTES;

/** The path of a route in a locale, for example `localizedPath("en", "home")`. */
export function localizedPath(locale: Locale, route: RouteName): string {
  return ROUTES[route](locale);
}
