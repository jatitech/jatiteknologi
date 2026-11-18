/**
 * Spacing, radius and elevation from `design/tokens.penpot.json` (primitives and semantic sets),
 * keyed by Penpot names. Values are CSS lengths. Elevation comes from DESIGN.md, because the
 * Penpot export has no shadow tokens.
 */

/** Raw spacing steps on a 4px base. Components use the semantic names below instead. */
export const SPACING_PRIMITIVES = {
  "spacing.0": "0px",
  "spacing.4": "4px",
  "spacing.8": "8px",
  "spacing.12": "12px",
  "spacing.16": "16px",
  "spacing.20": "20px",
  "spacing.24": "24px",
  "spacing.32": "32px",
  "spacing.48": "48px",
  "spacing.64": "64px",
  "spacing.72": "72px",
  "spacing.96": "96px",
  "spacing.128": "128px",
} as const;

/** Semantic spacing: the names used in layouts, such as `p-md` or `py-section`. */
export const SPACING = {
  "spacing.xxs": SPACING_PRIMITIVES["spacing.4"],
  "spacing.xs": SPACING_PRIMITIVES["spacing.8"],
  "spacing.sm": SPACING_PRIMITIVES["spacing.12"],
  "spacing.md": SPACING_PRIMITIVES["spacing.16"],
  "spacing.lg": SPACING_PRIMITIVES["spacing.24"],
  "spacing.xl": SPACING_PRIMITIVES["spacing.32"],
  "spacing.2xl": SPACING_PRIMITIVES["spacing.48"],
  "spacing.3xl": SPACING_PRIMITIVES["spacing.64"],
  "spacing.section-mobile": SPACING_PRIMITIVES["spacing.72"],
  "spacing.section-tablet": SPACING_PRIMITIVES["spacing.96"],
  "spacing.section": SPACING_PRIMITIVES["spacing.128"],
  "spacing.margin-mobile": SPACING_PRIMITIVES["spacing.20"],
  "spacing.margin-tablet": SPACING_PRIMITIVES["spacing.32"],
  "spacing.margin": SPACING_PRIMITIVES["spacing.48"],
  "spacing.gutter": SPACING_PRIMITIVES["spacing.24"],
} as const;

/** Raw corner radii. */
export const RADIUS_PRIMITIVES = {
  "radius.0": "0px",
  "radius.6": "6px",
  "radius.12": "12px",
  "radius.20": "20px",
  "radius.9999": "9999px",
} as const;

/** Semantic corner radii: `rounded-md` for cards and inputs, `rounded-full` for pills. */
export const RADIUS = {
  "radius.none": RADIUS_PRIMITIVES["radius.0"],
  "radius.sm": RADIUS_PRIMITIVES["radius.6"],
  "radius.md": RADIUS_PRIMITIVES["radius.12"],
  "radius.lg": RADIUS_PRIMITIVES["radius.20"],
  "radius.full": RADIUS_PRIMITIVES["radius.9999"],
} as const;

/** Elevation levels 1 to 3 from DESIGN.md, "Elevation & Depth". Level 0 is `shadow-none`. */
export const SHADOW = {
  "shadow.ring": "0 0 0 1px rgba(14, 26, 43, 0.06)",
  "shadow.float":
    "0 0 0 1px rgba(255, 255, 255, 0.5), 0 0 20px rgba(29, 95, 214, 0.06), 4px 8px 24px rgba(14, 26, 43, 0.08)",
  "shadow.overlay": "0 24px 48px -12px rgba(14, 26, 43, 0.25)",
} as const;
