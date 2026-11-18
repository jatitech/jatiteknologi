import { expect, test } from "../fixtures";

import { PLATFORM_PAGES } from "./pages";

/** The solid bar along the top of each hero panel, as RGBA. */
const BRAND_BAR = {
  "frappe-erpnext": [0, 137, 255, 255],
  odoo: [113, 75, 103, 255],
  meta: [4, 103, 223, 255],
  shopify: [122, 181, 92, 255],
  shopee: [238, 77, 45, 255],
  "tiktok-shop": [0, 0, 0, 255],
} as const;

test.describe("Platform page", () => {
  test("Paints the hero panel in the platform's brand colour, with its logo and name", async ({
    page,
  }) => {
    // This runs on the dev server, which sends no CSP. Under the preview server's
    // `upgrade-insecure-requests`, WebKit upgrades the stylesheet of a plain-HTTP localhost page to
    // HTTPS and never loads it.
    for (const { path, slug, copy } of PLATFORM_PAGES) {
      await page.goto(path);

      const panel = page
        .locator("#platform-hero-heading")
        .locator("xpath=ancestor::section")
        .locator('div[aria-hidden="true"]');

      await expect(panel, path).toBeVisible();

      // Browsers report the colour in different spaces (rgb or oklab), so read it back as pixels.
      const bar = await panel.locator("[data-brand-bar]").evaluate((el) => {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d", { willReadFrequently: true });

        if (context === null) return [];
        context.fillStyle = getComputedStyle(el).backgroundColor;
        context.fillRect(0, 0, 1, 1);

        return [...context.getImageData(0, 0, 1, 1).data];
      });

      expect(bar, path).toEqual(BRAND_BAR[slug]);
      await expect(panel, path).not.toHaveCSS("background-color", "rgba(0, 0, 0, 0)");

      const logo = panel.locator("span[class*='i-simple-icons-']").first();
      await expect(logo, path).toBeVisible();
      await expect(panel.locator('[translate="no"]'), path).toHaveText(copy.name);
    }
  });
});
