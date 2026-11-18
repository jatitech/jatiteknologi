import { expect, test } from "../fixtures";

test.describe("Design tokens", () => {
  test("Keeps the light colours when the system prefers dark", async ({ page }) => {
    await page.emulateMedia({ colorScheme: "dark" });
    await page.goto("/");

    const { primary, neutral, scheme } = await page.evaluate(() => {
      const root = getComputedStyle(document.documentElement);

      return {
        primary: root.getPropertyValue("--color-primary").trim(),
        neutral: root.getPropertyValue("--color-neutral").trim(),
        scheme: root.colorScheme,
      };
    });

    // The browser may report the hex in lower case after minification.
    expect(primary.toUpperCase()).toBe("#1D5FD6");
    expect(neutral.toUpperCase()).toBe("#FAF8F4");
    expect(scheme).toBe("light");
  });
});
