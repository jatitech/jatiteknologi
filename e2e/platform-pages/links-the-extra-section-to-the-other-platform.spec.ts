import { expect, test } from "../fixtures";
import { answerUpgradedRequestsOverHttp } from "../answer-upgraded-requests";
import { PREVIEW_URL } from "../origins";

test.use({ baseURL: PREVIEW_URL });

test.describe("Platform page", () => {
  test("Links the stock section of Shopee and TikTok Shop to each other", async ({ page }) => {
    test.setTimeout(120_000);
    await answerUpgradedRequestsOverHttp(page);

    for (const [from, to, name] of [
      ["/layanan/shopee", "/layanan/tiktok-shop", "Lihat juga halaman TikTok Shop →"],
      ["/layanan/tiktok-shop", "/layanan/shopee", "Lihat juga halaman Shopee →"],
    ] as const) {
      await page.goto(from);

      await page.getByRole("link", { name, exact: true }).click();

      await expect(page).toHaveURL(new RegExp(`${to}$`), { timeout: 15_000 });
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    }
  });
});
