import { expect, test } from "../fixtures";

test.describe("i18n", () => {
  test("Loads the English home in English", async ({ page }) => {
    await page.goto("/en");
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
    await expect(page).toHaveTitle("Jatiteknologi");
    await expect(page.getByRole("link", { name: "Skip to content" })).toHaveCount(1);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "Durable business systems for growing SMEs.",
    );
  });
});
