import { expect, test } from "../fixtures";

test.describe("Home page", () => {
  test("Draws a decorative logo on each platform tile and keeps the name as text", async ({
    page,
  }) => {
    for (const path of ["/", "/en"]) {
      await page.goto(path);

      const tiles = page.locator("#foundation-heading").locator("xpath=ancestor::section//ul/li/a");
      await expect(tiles, path).toHaveCount(6);

      for (const tile of await tiles.all()) {
        // The first aria-hidden span holds the logos. The second is the hover arrow.
        const logos = tile.locator('span[aria-hidden="true"]').first().locator("> span");
        expect(await logos.count(), path).toBeGreaterThan(0);

        for (const logo of await logos.all()) {
          const box = await logo.boundingBox();
          expect(box?.width, path).toBeGreaterThan(0);
          const mask = await logo.evaluate((el) => getComputedStyle(el).maskImage);
          expect(mask, path).toContain("url(");
        }

        await expect(tile.locator('[translate="no"]'), path).not.toBeEmpty();
      }
    }
  });
});
