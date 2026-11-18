import { expect, test } from "../fixtures";

test.describe("Design tokens", () => {
  test("Sets the body font to Plus Jakarta Sans", async ({ page }) => {
    await page.goto("/");

    const fontFamily = await page.evaluate(() => getComputedStyle(document.body).fontFamily);
    // WebKit serialises the family without quotes; Chromium keeps them.
    expect(fontFamily).toMatch(/^"?Plus Jakarta Sans/);
  });
});
