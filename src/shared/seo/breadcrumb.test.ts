import { describe, expect, it } from "vite-plus/test";

import { breadcrumbJsonLd } from "./breadcrumb";
import { serializeJsonLd } from "./organization";

const TRAIL = [
  { name: "Beranda", url: "https://jatiteknologi.test/" },
  { name: "Frappe dan ERPNext", url: "https://jatiteknologi.test/layanan/frappe-erpnext" },
];

describe("breadcrumbJsonLd", () => {
  it("numbers the items from 1 in the order given", () => {
    expect(breadcrumbJsonLd(TRAIL).itemListElement.map((item) => item.position)).toEqual([1, 2]);
  });

  it("gives each item its name and absolute url", () => {
    expect(breadcrumbJsonLd(TRAIL)).toEqual({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Beranda",
          item: "https://jatiteknologi.test/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Frappe dan ERPNext",
          item: "https://jatiteknologi.test/layanan/frappe-erpnext",
        },
      ],
    });
  });
});

describe("serializeJsonLd for a breadcrumb", () => {
  it("round-trips through JSON.parse", () => {
    const data = breadcrumbJsonLd(TRAIL);

    expect(JSON.parse(serializeJsonLd(data))).toEqual(data);
  });

  it("escapes < so a name cannot close the script tag", () => {
    const text = serializeJsonLd(
      breadcrumbJsonLd([{ name: "</script><b>", url: "https://jatiteknologi.test/" }]),
    );

    expect(text).not.toContain("<");
    expect(JSON.parse(text).itemListElement[0].name).toBe("</script><b>");
  });
});
