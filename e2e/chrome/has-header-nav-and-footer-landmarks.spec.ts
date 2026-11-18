import { expect, test } from "../fixtures";

test.describe("Site chrome", () => {
  test("Has a header with a main navigation and a footer", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("banner")).toHaveCount(1);
    await expect(page.getByRole("banner").getByRole("navigation", { name: "Utama" })).toHaveCount(
      1,
    );
    await expect(page.getByRole("contentinfo")).toHaveCount(1);
    await expect(page.getByRole("main")).toHaveCount(1);
  });
});
