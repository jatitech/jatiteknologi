import { expect, test } from "../fixtures";

test.describe("Home page", () => {
  test("Resolves every in-page anchor", async ({ page }) => {
    for (const path of ["/", "/en"]) {
      await page.goto(path);

      const targets = await page
        .locator('a[href^="#"]')
        .evaluateAll((links) => links.map((link) => link.getAttribute("href") ?? ""));

      expect(targets.length, `${path} in-page links`).toBeGreaterThan(0);

      for (const href of targets) {
        await expect(page.locator(href), `${path} ${href}`).toHaveCount(1);
      }
    }
  });
});
