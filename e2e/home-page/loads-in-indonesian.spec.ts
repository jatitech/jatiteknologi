import { expect, test } from "../fixtures";

test.describe("Home page", () => {
  test("Loads in Indonesian", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("html")).toHaveAttribute("lang", "id");
    await expect(page).toHaveTitle("Jatiteknologi");
    await expect(
      page.getByRole("heading", {
        level: 1,
        name: "Sistem bisnis yang awet untuk UMKM yang terus tumbuh.",
      }),
    ).toBeVisible();
  });
});
