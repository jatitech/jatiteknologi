import extractorMdc from "@unocss/extractor-mdc";
import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetWind4,
  transformerVariantGroup,
} from "unocss";
import type { Theme } from "unocss/preset-wind4";

import { designPreflight, designTheme } from "./src/shared/design/index";

/** Unwraps the default export of an icon set's JSON module. */
const loadIcons = <T>(icons: Promise<{ default: T }>) => icons.then((module) => module.default);

export default defineConfig<Theme>({
  theme: designTheme,
  preflights: [{ getCSS: () => designPreflight }],
  presets: [
    presetWind4({ preflights: { reset: true } }),
    presetTypography(),
    presetIcons({
      collections: {
        ph: () => loadIcons(import("@iconify-json/ph/icons.json", { with: { type: "json" } })),
        lucide: () =>
          loadIcons(import("@iconify-json/lucide/icons.json", { with: { type: "json" } })),
        "simple-icons": () =>
          loadIcons(import("@iconify-json/simple-icons/icons.json", { with: { type: "json" } })),
      },
    }),
  ],
  extractors: [extractorMdc()],
  transformers: [transformerVariantGroup()],
  content: {
    filesystem: ["src/**/*.{md,mdc,markdown}"],
  },
});
