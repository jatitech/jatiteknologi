import { expect, test } from "../fixtures";

test.describe("Site chrome", () => {
  for (const [path, legal] of [
    [
      "/",
      `© ${new Date().getFullYear()} PT Jati Teknologi Indonesia · NIB 0410230086416 · Kab. Tangerang, Banten`,
    ],
    [
      "/en",
      `© ${new Date().getFullYear()} PT Jati Teknologi Indonesia · NIB 0410230086416 · Tangerang Regency, Banten`,
    ],
  ] as const) {
    test(`Shows the legal line in the footer of ${path}`, async ({ page }) => {
      await page.goto(path);

      await expect(page.getByRole("contentinfo").getByText(legal, { exact: true })).toBeVisible();
    });
  }
});
