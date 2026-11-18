import { expect, test } from "../fixtures";

const WIDTHS = [320, 360, 768, 1024, 1440] as const;

test.describe("Home page", () => {
  test("Has no horizontal overflow at five widths", async ({ page }) => {
    test.setTimeout(180_000);

    for (const path of ["/", "/en"]) {
      for (const width of WIDTHS) {
        await page.setViewportSize({ width, height: 900 });
        await page.goto(path);
        await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

        const overflow = await page.evaluate(
          () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
        );

        expect(overflow, `${path} at ${width}px`).toBe(0);
      }
    }
  });
});
