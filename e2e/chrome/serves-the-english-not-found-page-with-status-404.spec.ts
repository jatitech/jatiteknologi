import { expect, test } from "../fixtures";

test.describe("Not-found page", () => {
  test("Serves the English not-found page with status 404", async ({ page }) => {
    const response = await page.goto("/en/page-that-does-not-exist");

    expect(response?.status()).toBe(404);
    await expect(page).toHaveTitle("Page not found · Jatiteknologi");
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
    await expect(
      page.getByRole("heading", { level: 1, name: "This page could not be found." }),
    ).toBeVisible();
    await expect(page.getByRole("link", { name: "Go to the home page" })).toHaveAttribute(
      "href",
      "/en",
    );
  });
});
