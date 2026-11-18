/** Schema.org `BreadcrumbList`. Each item carries its absolute URL, as search engines require. */
export interface BreadcrumbJsonLd {
  "@context": "https://schema.org";
  "@type": "BreadcrumbList";
  itemListElement: {
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
  }[];
}

/** A breadcrumb trail as JSON-LD. Positions count from 1 in the order given. */
export function breadcrumbJsonLd(
  trail: readonly { name: string; url: string }[],
): BreadcrumbJsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}
