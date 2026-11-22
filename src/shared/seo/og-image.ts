/**
 * The Open Graph card every page shares: the horizontal logo on Paper, rendered from
 * `brand/logo/export/jatiteknologi-og-card.svg` into `public/`. Without a declared image, link
 * previews pick a large image from the page, which is the founder portrait.
 */
export const OG_IMAGE = {
  path: "/og-image.png",
  type: "image/png",
  width: 1200,
  height: 630,
} as const;
