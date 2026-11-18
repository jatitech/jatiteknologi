import { expect, test } from "../fixtures";
import { PREVIEW_URL } from "../origins";

import { PLATFORM_PAGES } from "./pages";

test.use({ baseURL: PREVIEW_URL });

test.describe("Platform page", () => {
  test("Gives a BreadcrumbList as JSON-LD that parses on every platform page", async ({ page }) => {
    test.setTimeout(240_000);

    for (const { path, copy, shared, locale } of PLATFORM_PAGES) {
      await page.goto(path);

      const scripts = page.locator('script[type="application/ld+json"]');
      await expect(scripts).toHaveCount(1);

      const data = JSON.parse((await scripts.textContent()) ?? "");
      const homePath = locale === "en" ? "/en" : "/";

      expect(data["@type"], path).toBe("BreadcrumbList");
      expect(data.itemListElement, path).toEqual([
        {
          "@type": "ListItem",
          position: 1,
          name: shared.breadcrumb.home,
          item: expect.stringMatching(new RegExp(`${homePath}$`)),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: copy.name,
          item: expect.stringMatching(new RegExp(`${path}$`)),
        },
      ]);
    }
  });
});
