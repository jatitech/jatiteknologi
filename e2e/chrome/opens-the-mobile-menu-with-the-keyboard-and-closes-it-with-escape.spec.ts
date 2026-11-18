import { expect, test } from "../fixtures";

test.use({ viewport: { width: 360, height: 740 } });

test.describe("Site chrome", () => {
  test("Opens the mobile menu with the keyboard and closes it with Escape", async ({ page }) => {
    await page.goto("/");

    // The dev toolbar has its own "Menu" button, so the locator stays inside the page header.
    const menuButton = page.getByRole("banner").getByRole("button", { name: "Menu" });
    const menu = page.getByRole("dialog", { name: "Menu" });
    await expect(menu).toBeHidden();

    await menuButton.focus();
    await expect(menuButton).toBeFocused();
    expect(await menuButton.evaluate((el) => getComputedStyle(el).outlineWidth)).toBe("2px");

    await page.keyboard.press("Enter");
    await expect(menu).toBeVisible();
    await expect(page.getByRole("button", { name: "Tutup menu" })).toBeFocused();

    await page.keyboard.press("Escape");
    await expect(menu).toBeHidden();
    await expect(menuButton).toBeFocused();
  });
});
