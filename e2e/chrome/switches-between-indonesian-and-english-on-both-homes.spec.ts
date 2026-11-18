import { expect, test } from "../fixtures";

test.describe("Site chrome", () => {
  test("Switches between Indonesian and English on both homes", async ({ page }) => {
    // The footer switch is on every breakpoint; the header one only shows from 1024px.
    await page.goto("/");
    await expect(page.locator("html")).toHaveAttribute("lang", "id");

    await page
      .getByRole("group", { name: "Pilih bahasa" })
      .last()
      .getByRole("link", { name: "EN" })
      .click();
    await expect(page).toHaveURL(/\/en$/);
    await expect(page.locator("html")).toHaveAttribute("lang", "en");

    await page
      .getByRole("group", { name: "Choose language" })
      .last()
      .getByRole("link", { name: "ID" })
      .click();
    await expect(page).toHaveURL(/\/$/);
    await expect(page.locator("html")).toHaveAttribute("lang", "id");
  });
});
