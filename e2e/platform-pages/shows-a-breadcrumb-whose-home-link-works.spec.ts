import { expect, test } from "../fixtures";
import { answerUpgradedRequestsOverHttp } from "../answer-upgraded-requests";
import { PREVIEW_URL } from "../origins";

test.use({ baseURL: PREVIEW_URL });

test.describe("Platform page", () => {
  test("Shows a breadcrumb whose home link opens the home page", async ({ page }) => {
    await answerUpgradedRequestsOverHttp(page);
    await page.goto("/layanan/frappe-erpnext");

    const breadcrumb = page.getByRole("navigation", { name: "Jalur halaman" });
    await expect(breadcrumb.getByRole("link", { name: "Beranda" })).toHaveAttribute("href", "/");
    await expect(breadcrumb.locator('[aria-current="page"]')).toHaveText("Frappe dan ERPNext");

    await breadcrumb.getByRole("link", { name: "Beranda" }).click();

    // WebKit reports the https address that `upgrade-insecure-requests` asks for, so only the path is checked.
    await expect(page).toHaveURL(/localhost:4322\/$/);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });
});
