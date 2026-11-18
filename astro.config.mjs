// @ts-check
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";
import UnoCSS from "unocss/astro";
import { voidPlugin } from "void";
import { DEFAULT_APP_SITE } from "./env.ts";
import { FONT_VARIABLE } from "./src/shared/design/fonts.ts";
import { localizedPath, PLATFORM_SLUGS } from "./src/shared/i18n/routes.ts";
import { CSP_DIRECTIVES } from "./src/shared/security/index.ts";

const site = process.env.VITE_APP_SITE || DEFAULT_APP_SITE;

/** The Indonesian and English path of each platform page. */
const PLATFORM_PAIRS = PLATFORM_SLUGS.map((slug) => ({
  id: localizedPath("id", slug),
  en: localizedPath("en", slug),
}));

/**
 * Pairs each platform page with its other language. The sitemap integration pairs URLs that share a
 * path after the locale prefix, and the platform pages use different segments (`/integrasi/` and
 * `/en/integrations/`), so they need their links written here.
 * @param {import("@astrojs/sitemap").SitemapItem} item
 * @returns {import("@astrojs/sitemap").SitemapItem}
 */
function pairPlatformLinks(item) {
  const pair = PLATFORM_PAIRS.find(({ id, en }) => item.url.endsWith(id) || item.url.endsWith(en));

  if (pair === undefined) return item;

  return {
    ...item,
    links: [
      { url: new URL(pair.id, site).href, lang: "id-ID" },
      { url: new URL(pair.en, site).href, lang: "en" },
    ],
  };
}

export default defineConfig({
  site,
  output: "server",
  // Its audits fail in WebKit ("Load failed") and its own "Menu" button clashes with the site's.
  devToolbar: { enabled: false },
  trailingSlash: "never",
  build: { format: "file" },
  adapter: cloudflare({ configPath: "./.void-wrangler.jsonc" }),
  // Astro hashes its own inline styles and scripts into the policy. The other headers are in
  // src/shared/security, which also writes public/_headers and the middleware.
  security: { csp: { directives: [...CSP_DIRECTIVES] } },
  // The site has no Markdown, and Shiki's inline styles cannot satisfy the CSP.
  markdown: { syntaxHighlight: false },
  // Fetched from Google at build time and served from the site's own origin, so no browser
  // request ever reaches a third party. Only the sans and mono weights in DESIGN.md are kept.
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Plus Jakarta Sans",
      cssVariable: FONT_VARIABLE.sans,
      weights: [400, 500, 600],
      styles: ["normal"],
      subsets: ["latin"],
      display: "swap",
      fallbacks: ["sans-serif"],
    },
    {
      provider: fontProviders.google(),
      name: "JetBrains Mono",
      cssVariable: FONT_VARIABLE.mono,
      weights: [400, 500],
      styles: ["normal"],
      subsets: ["latin"],
      display: "swap",
      fallbacks: ["monospace"],
    },
  ],
  i18n: {
    defaultLocale: "id",
    locales: ["id", "en"],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    UnoCSS(),
    sitemap({
      i18n: {
        defaultLocale: "id",
        locales: { id: "id-ID", en: "en" },
      },
      serialize: pairPlatformLinks,
    }),
  ],
  vite: { plugins: [voidPlugin()] },
});
