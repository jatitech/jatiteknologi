import { describe, expect, it } from "vite-plus/test";

import { localizedPath, PLATFORM_SLUGS } from "./routes";

describe("localizedPath", () => {
  it("leaves the Indonesian home unprefixed", () => {
    expect(localizedPath("id", "home")).toBe("/");
  });

  it("prefixes the English home with /en", () => {
    expect(localizedPath("en", "home")).toBe("/en");
  });

  it("gives the not-found page its own path in each locale", () => {
    expect(localizedPath("id", "notFound")).toBe("/404");
    expect(localizedPath("en", "notFound")).toBe("/en/404");
  });
});

describe("platform routes", () => {
  it("lists the six platforms", () => {
    expect(PLATFORM_SLUGS).toEqual([
      "frappe-erpnext",
      "odoo",
      "meta",
      "shopify",
      "shopee",
      "tiktok-shop",
    ]);
  });

  it.for(PLATFORM_SLUGS)("gives %s a path in each locale", (slug) => {
    expect(localizedPath("id", slug)).toBe(`/integrasi/${slug}`);
    expect(localizedPath("en", slug)).toBe(`/en/integrations/${slug}`);
  });

  it("gives every route a different path in each locale", () => {
    const routes = ["home", "notFound", ...PLATFORM_SLUGS] as const;

    const paths = routes.flatMap((route) => [
      localizedPath("id", route),
      localizedPath("en", route),
    ]);

    expect(new Set(paths).size).toBe(paths.length);
  });

  it.for(PLATFORM_SLUGS)("round-trips %s between its two locale paths", (slug) => {
    const alternates = { id: localizedPath("id", slug), en: localizedPath("en", slug) };

    expect(alternates.id.split("/").at(-1)).toBe(slug);
    expect(alternates.en.split("/").at(-1)).toBe(slug);
    expect(alternates.en.startsWith("/en/integrations/")).toBe(true);
    expect(alternates.id.startsWith("/integrasi/")).toBe(true);
  });
});
