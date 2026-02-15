// @ts-check
import { defineConfig, envField } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";
import { paraglideVitePlugin } from "@inlang/paraglide-js";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

const site = process.env.SITE_URL || "http://localhost:4321";

// https://astro.build/config
export default defineConfig({
  env: {
    schema: {
      SITE_URL: envField.string({
        context: "server",
        access: "public",
        default: "http://localhost:4321",
      }),
    },
  },
  site,
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
    imageService: "cloudflare",
  }),

  vite: {
    plugins: [
      tailwindcss(),
      paraglideVitePlugin({
        project: "./project.inlang",
        outdir: "./src/paraglide",
        strategy: ["cookie", "baseLocale"],
      }),
    ],
  },

  i18n: {
    locales: ["de", "en", "es", "fr", "id", "it", "pt", "ja", "zh-cn"],
    defaultLocale: "en",
  },

  integrations: [sitemap(), icon()],
});
