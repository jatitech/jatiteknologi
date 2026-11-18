/**
 * Type scale from the Penpot `typography` set, keyed by Penpot names. Only size, line height and
 * tracking live here. Weight, family and case are separate utilities (`font-medium`, `font-mono`,
 * `uppercase`), because UnoCSS's `text-*` utilities cannot set them.
 */
export const TYPOGRAPHY = {
  "typography.display-xl": { fontSize: "72px", lineHeight: "1.04", letterSpacing: "-2.52px" },
  "typography.display-lg": { fontSize: "56px", lineHeight: "1.06", letterSpacing: "-1.68px" },
  "typography.headline-lg": { fontSize: "44px", lineHeight: "1.1", letterSpacing: "-1.1px" },
  "typography.headline-md": { fontSize: "32px", lineHeight: "1.15", letterSpacing: "-0.64px" },
  "typography.headline-sm": { fontSize: "24px", lineHeight: "1.25", letterSpacing: "-0.24px" },
  "typography.title-md": { fontSize: "18px", lineHeight: "1.35", letterSpacing: "-0.09px" },
  "typography.body-lg": { fontSize: "20px", lineHeight: "1.55", letterSpacing: "0px" },
  "typography.body-md": { fontSize: "17px", lineHeight: "1.65", letterSpacing: "0px" },
  "typography.body-sm": { fontSize: "15px", lineHeight: "1.55", letterSpacing: "0px" },
  "typography.label-md": { fontSize: "16px", lineHeight: "1.2", letterSpacing: "0px" },
  "typography.label-sm": { fontSize: "15px", lineHeight: "1.2", letterSpacing: "0px" },
  "typography.eyebrow": { fontSize: "13px", lineHeight: "1.4", letterSpacing: "0.78px" },
  "typography.mono-sm": { fontSize: "13px", lineHeight: "1.5", letterSpacing: "0px" },
  "typography.mobile.display-xl": { fontSize: "40px", lineHeight: "1.08", letterSpacing: "-1.4px" },
  "typography.mobile.display-lg": { fontSize: "36px", lineHeight: "1.1", letterSpacing: "-1.08px" },
  "typography.mobile.headline-lg": {
    fontSize: "30px",
    lineHeight: "1.15",
    letterSpacing: "-0.75px",
  },
  "typography.mobile.headline-md": {
    fontSize: "26px",
    lineHeight: "1.2",
    letterSpacing: "-0.52px",
  },
  "typography.mobile.headline-sm": { fontSize: "20px", lineHeight: "1.3", letterSpacing: "-0.2px" },
  "typography.mobile.body-lg": { fontSize: "18px", lineHeight: "1.55", letterSpacing: "0px" },
  "typography.mobile.body-md": { fontSize: "16px", lineHeight: "1.65", letterSpacing: "0px" },
  "typography.mobile.eyebrow": { fontSize: "12px", lineHeight: "1.4", letterSpacing: "0.72px" },
} as const;
