import { expect, test } from "../fixtures";

test.describe("Home page", () => {
  test("Shows the founder disclosure in both languages", async ({ page }) => {
    for (const [path, text] of [
      ["/", "Pengalaman di atas adalah pengalaman pribadi pendiri di perusahaan sebelumnya."],
      ["/en", "The experience above is the founder's personal experience at previous companies."],
    ] as const) {
      await page.goto(path);
      await expect(page.getByText(text, { exact: true })).toBeVisible();
    }
  });
});
