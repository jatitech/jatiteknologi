/** Which icon a feature row shows. `FeatureRow.astro` maps each name to one Phosphor icon. */
export type FeatureIcon =
  | "stock"
  | "data"
  | "phased"
  | "apps"
  | "integration"
  | "docs"
  | "monitoring"
  | "adjustments"
  | "engineer";

/** One row of a service section: its icon and its copy. */
export interface Feature {
  icon: FeatureIcon;
  title: string;
  description: string;
}
