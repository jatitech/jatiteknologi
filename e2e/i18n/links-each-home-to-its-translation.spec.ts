import { expect, test } from "../fixtures";

const HOMES = ["/", "/en"] as const;

test.describe("i18n", () => {
  for (const path of HOMES) {
    test(`Links ${path} to both language versions`, async ({ page }) => {
      await page.goto(path);
      const alternate = (lang: string) => page.locator(`link[rel="alternate"][hreflang="${lang}"]`);

      await expect(alternate("id")).toHaveAttribute("href", /\/$/);
      await expect(alternate("en")).toHaveAttribute("href", /\/en$/);
      await expect(alternate("x-default")).toHaveAttribute("href", /\/$/);
    });
  }
});
