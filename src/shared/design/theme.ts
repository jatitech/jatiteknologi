import type { Theme } from "unocss/preset-wind4";

import { FONT_VARIABLE } from "./fonts";
import { LIGHT_MODE } from "./palette";
import { RADIUS, SHADOW, SPACING } from "./scale";
import { TYPOGRAPHY } from "./typography";

/** `color.on-surface` becomes `on-surface`; `typography.mobile.body-md` becomes `mobile-body-md`. */
function themeKey(token: string): string {
  return token.slice(token.indexOf(".") + 1).replaceAll(".", "-");
}

/** `color.on-surface` becomes the custom property `--color-on-surface`. */
function variableName(token: string): string {
  return `--${token.replaceAll(".", "-")}`;
}

function declarations(entries: readonly (readonly [string, string])[]): string {
  return entries.map(([token, value]) => `${variableName(token)}: ${value};`).join("\n    ");
}

const lightRoot = `:root {
    color-scheme: light;
    ${declarations(Object.entries(LIGHT_MODE))}
  }`;

/**
 * Colour roles as custom properties on `:root`. The site is light only: `color-scheme: light` keeps
 * the browser's own UI light too, whatever the system prefers. Penpot's `modes/dark` tokens are
 * not shipped until a dark theme is planned. Also paints the page ground and default text.
 */
export const designPreflight = [
  lightRoot,
  "html { background-color: var(--color-neutral); color: var(--color-on-surface); }",
].join("\n");

/** UnoCSS theme built from the tokens. Colours point at the variables that `designPreflight` sets. */
export const designTheme: Partial<Theme> = {
  colors: Object.fromEntries(
    Object.keys(LIGHT_MODE).map((token) => [themeKey(token), `var(${variableName(token)})`]),
  ),
  font: {
    sans: `var(${FONT_VARIABLE.sans})`,
    mono: `var(${FONT_VARIABLE.mono})`,
  },
  radius: Object.fromEntries(
    Object.entries(RADIUS).map(([token, value]) => [themeKey(token), value]),
  ),
  spacing: Object.fromEntries(
    Object.entries(SPACING).map(([token, value]) => [themeKey(token), value]),
  ),
  shadow: Object.fromEntries(
    Object.entries(SHADOW).map(([token, value]) => [themeKey(token), value]),
  ),
  text: Object.fromEntries(
    Object.entries(TYPOGRAPHY).map(([token, style]) => [themeKey(token), style]),
  ),
};
