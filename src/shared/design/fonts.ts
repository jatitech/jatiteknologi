/**
 * CSS custom properties that Astro's `<Font>` writes for each self-hosted family. `astro.config.mjs`
 * declares the families under these names, `BaseLayout` renders them, and the theme reads them
 * through `font-sans` and `font-mono`. The names avoid `--font-sans`, which UnoCSS already uses.
 */
export const FONT_VARIABLE = {
  sans: "--font-plus-jakarta-sans",
  mono: "--font-jetbrains-mono",
} as const;
