// @ts-check
import { defineConfig, envField } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";
import { paraglideVitePlugin } from "@inlang/paraglide-js";
import sitemap from "@astrojs/sitemap";
import { readFile } from "node:fs/promises";

const site = process.env.PUBLIC_SITE_URL || "http://localhost:4321";

const inlangDirectory = "./project.inlang";
const inlangSettings = await readFile(`${inlangDirectory}/settings.json`);
const inlang = JSON.parse(inlangSettings.toString() || "{}");
const defaultLocale = inlang.baseLocale;
const locales = inlang.locales;

// https://astro.build/config
export default defineConfig({
  env: {
    schema: {
      PUBLIC_SITE_URL: envField.string({
        context: "server",
        access: "public",
        default: "http://localhost:4321",
      }),
    },
  },
  site,
  adapter: cloudflare(),

  vite: {
    ssr: {
      external: ["node:fs/promises", "node:url", "node:crypto", "node:fs"],
    },
    plugins: [
      tailwindcss(),
      paraglideVitePlugin({
        project: inlangDirectory,
        outdir: "./src/paraglide",
        strategy: ["cookie", "baseLocale"],
      }),
    ],
  },

  i18n: {
    locales,
    defaultLocale,
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [sitemap()],
});
