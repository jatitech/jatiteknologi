import { expect, test } from "../fixtures";

test.describe("Design tokens", () => {
  test("Sets the primary colour for light mode", async ({ page }) => {
    await page.emulateMedia({ colorScheme: "light" });
    await page.goto("/");

    const primary = await page.evaluate(() =>
      getComputedStyle(document.documentElement).getPropertyValue("--color-primary").trim(),
    );

    // The browser may report the hex in lower case after minification.
    expect(primary.toUpperCase()).toBe("#1D5FD6");
  });
});
