import { describe, expect, it } from "vite-plus/test";

import { organizationJsonLd, serializeJsonLd } from "./organization";

const SITE = new URL("https://jatiteknologi.test");

describe("organizationJsonLd", () => {
  it("names the legal entity and the brand", () => {
    expect(organizationJsonLd(SITE)).toMatchObject({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "PT Jati Teknologi Indonesia",
      alternateName: "Jatiteknologi",
      foundingDate: "2023",
    });
  });

  it("points the url and the logo at the site's origin", () => {
    const data = organizationJsonLd(SITE);

    expect(data.url).toBe("https://jatiteknologi.test/");
    expect(data.logo).toBe("https://jatiteknologi.test/icon-512.png");
  });

  it("gives the contact email and the Kabupaten Tangerang address", () => {
    expect(organizationJsonLd(SITE)).toMatchObject({
      email: "pt@jatiteknologi.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kabupaten Tangerang",
        addressRegion: "Banten",
        addressCountry: "ID",
      },
    });
  });

  it("links the Facebook Page as sameAs", () => {
    expect(organizationJsonLd(SITE).sameAs).toEqual([
      "https://www.facebook.com/profile.php?id=61587708123428",
    ]);
  });
});

describe("serializeJsonLd", () => {
  it("round-trips through JSON.parse", () => {
    const data = organizationJsonLd(SITE);

    expect(JSON.parse(serializeJsonLd(data))).toEqual(data);
  });

  it("escapes < so a value cannot close the script tag", () => {
    const text = serializeJsonLd({ ...organizationJsonLd(SITE), name: "</script><b>" });

    expect(text).not.toContain("<");
    expect(JSON.parse(text).name).toBe("</script><b>");
  });
});
