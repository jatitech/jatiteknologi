import { CONTACT_EMAIL } from "@/shared/contact";

import type { BreadcrumbJsonLd } from "./breadcrumb";

/** Schema.org `Organization`. Only facts approved in BRAND.md are written here. */
interface OrganizationJsonLd {
  "@context": "https://schema.org";
  "@type": "Organization";
  name: string;
  alternateName: string;
  url: string;
  logo: string;
  email: string;
  foundingDate: string;
  address: {
    "@type": "PostalAddress";
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
}

/** The organization as JSON-LD for the site at `site`. The logo is the 512 px app icon in `public/`. */
export function organizationJsonLd(site: URL): OrganizationJsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PT Jati Teknologi Indonesia",
    alternateName: "Jatiteknologi",
    url: site.href,
    logo: new URL("/icon-512.png", site).href,
    email: CONTACT_EMAIL,
    foundingDate: "2023",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kabupaten Tangerang",
      addressRegion: "Banten",
      addressCountry: "ID",
    },
  };
}

/** The JSON text for a `<script type="application/ld+json">`. `<` is escaped so no value can close the tag. */
export function serializeJsonLd(data: OrganizationJsonLd | BreadcrumbJsonLd): string {
  return JSON.stringify(data).replaceAll("<", "\\u003c");
}
