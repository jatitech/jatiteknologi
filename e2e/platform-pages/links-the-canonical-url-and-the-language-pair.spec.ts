import { expect, test } from "../fixtures";
import { PREVIEW_URL } from "../origins";

import { PLATFORM_PAGES } from "./pages";

test.use({ baseURL: PREVIEW_URL });

test.describe("Platform page", () => {
  test("Links the canonical URL and the Indonesian and English versions on every platform page", async ({
    page,
  }) => {
    for (const { slug } of PLATFORM_PAGES.filter((item) => item.locale === "id")) {
      const idPath = `/integrasi/${slug}`;
      const enPath = `/en/integrations/${slug}`;

      for (const path of [idPath, enPath]) {
        await page.goto(path);

        await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
          "href",
          new RegExp(`${path}$`),
        );
        await expect(page.locator('link[rel="alternate"][hreflang="id"]')).toHaveAttribute(
          "href",
          new RegExp(`${idPath}$`),
        );
        await expect(page.locator('link[rel="alternate"][hreflang="en"]')).toHaveAttribute(
          "href",
          new RegExp(`${enPath}$`),
        );
        await expect(page.locator('link[rel="alternate"][hreflang="x-default"]')).toHaveAttribute(
          "href",
          new RegExp(`${idPath}$`),
        );
      }
    }
  });
});
