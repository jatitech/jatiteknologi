import { expect, test } from "../fixtures";

test.describe("Not-found page", () => {
  test("Serves the Indonesian not-found page with status 404", async ({ page }) => {
    const response = await page.goto("/halaman-yang-tidak-ada");

    expect(response?.status()).toBe(404);
    await expect(page).toHaveTitle("Halaman tidak ditemukan · Jatiteknologi");
    await expect(page.locator("html")).toHaveAttribute("lang", "id");
    await expect(
      page.getByRole("heading", { level: 1, name: "Halaman ini tidak ditemukan." }),
    ).toBeVisible();
    await expect(page.getByRole("link", { name: "Kembali ke beranda" })).toHaveAttribute(
      "href",
      "/",
    );
  });
});
