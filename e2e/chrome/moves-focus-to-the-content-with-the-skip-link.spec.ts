import { expect, test } from "../fixtures";

test.describe("Site chrome", () => {
  test("Moves focus to the content with the skip link", async ({ page }) => {
    await page.goto("/");

    // Focus is set directly: WebKit on macOS does not Tab to links by default.
    const skipLink = page.getByRole("link", { name: "Langsung ke konten" });
    await skipLink.focus();
    await expect(skipLink).toBeFocused();

    await page.keyboard.press("Enter");
    await expect(page).toHaveURL(/#content$/);
    await expect(page.locator("main#content")).toBeFocused();
  });
});
