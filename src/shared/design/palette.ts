/**
 * Colour tokens from `design/tokens.penpot.json`, keyed by their Penpot names. `tokens.test.ts`
 * fails when these drift from the export, so change a value only after re-exporting from Penpot.
 */

/** Primitive colours, the raw palette that the role maps below point at. */
export const PALETTE = {
  "color.white": "#FFFFFF",
  "color.blue.50": "#EAF1FF",
  "color.blue.100": "#DCE8FF",
  "color.blue.300": "#6EA2FF",
  "color.blue.400": "#8DB6FF",
  "color.blue.600": "#1D5FD6",
  "color.blue.700": "#174BB0",
  "color.ink.900": "#0E1A2B",
  "color.ink.700": "#3A4556",
  "color.ink.500": "#5B6676",
  "color.ink.400": "#7D8492",
  "color.paper.50": "#FAF8F4",
  "color.paper.100": "#F2EFE9",
  "color.paper.200": "#E4E2DC",
  "color.teak.300": "#E2A464",
  "color.teak.600": "#9C5A22",
  "color.red.300": "#FF8A80",
  "color.red.600": "#C2362B",
  "color.green.300": "#5FD39A",
  "color.green.700": "#157A4A",
  "color.amber.300": "#F2B84B",
  "color.amber.700": "#9A6200",
  "color.night.950": "#0B1220",
  "color.night.925": "#0F1726",
  "color.night.900": "#131C2E",
  "color.night.850": "#16233D",
  "color.night.800": "#1A2A4A",
  "color.night.750": "#26324A",
  "color.night.600": "#5E6A85",
  "color.night.400": "#8E9AAE",
  "color.night.300": "#A3AEC0",
  "color.night.50": "#F2F5FA",
} as const;

/** Colour roles in light mode (Penpot `modes/light`). Each role points at a primitive. */
export const LIGHT_MODE = {
  "color.primary": PALETTE["color.blue.600"],
  "color.primary-hover": PALETTE["color.blue.700"],
  "color.primary-container": PALETTE["color.blue.50"],
  "color.on-primary": PALETTE["color.white"],
  "color.secondary": PALETTE["color.blue.300"],
  "color.secondary-container": PALETTE["color.blue.100"],
  "color.tertiary": PALETTE["color.teak.600"],
  "color.neutral": PALETTE["color.paper.50"],
  "color.surface": PALETTE["color.white"],
  "color.surface-sunken": PALETTE["color.paper.100"],
  "color.on-surface": PALETTE["color.ink.900"],
  "color.on-surface-variant": PALETTE["color.ink.700"],
  "color.muted": PALETTE["color.ink.500"],
  "color.outline": PALETTE["color.paper.200"],
  "color.outline-strong": PALETTE["color.ink.400"],
  "color.error": PALETTE["color.red.600"],
  "color.success": PALETTE["color.green.700"],
  "color.warning": PALETTE["color.amber.700"],
} as const;
