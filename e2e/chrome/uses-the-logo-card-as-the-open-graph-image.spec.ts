import { expect, test } from "../fixtures";

const PAGES = [
  { path: "/", alt: "Logo Jatiteknologi" },
  { path: "/en", alt: "Jatiteknologi logo" },
  { path: "/integrasi/odoo", alt: "Logo Jatiteknologi" },
  { path: "/en/integrations/odoo", alt: "Jatiteknologi logo" },
] as const;

test.describe("Site chrome", () => {
  for (const { path, alt } of PAGES) {
    test(`Uses the logo card as the Open Graph image on ${path}`, async ({ page }) => {
      await page.goto(path);

      const image = page.locator('meta[property="og:image"]');
      const imageUrl = new URL((await image.getAttribute("content")) ?? "");

      expect(imageUrl.pathname).toBe("/og-image.png");
      await expect(page.locator('meta[property="og:image:type"]')).toHaveAttribute(
        "content",
        "image/png",
      );
      await expect(page.locator('meta[property="og:image:width"]')).toHaveAttribute(
        "content",
        "1200",
      );
      await expect(page.locator('meta[property="og:image:height"]')).toHaveAttribute(
        "content",
        "630",
      );
      await expect(page.locator('meta[property="og:image:alt"]')).toHaveAttribute("content", alt);
      await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
        "content",
        "summary_large_image",
      );

      const response = await page.request.get(imageUrl.pathname);
      expect(response.status()).toBe(200);
      expect(response.headers()["content-type"]).toContain("image/png");
    });
  }
});
