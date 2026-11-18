import { expect, test } from "../fixtures";

test.describe("Home page", () => {
  for (const path of ["/", "/en"]) {
    test(`Links the web app manifest and its icons from ${path}`, async ({ page }) => {
      await page.goto(path);
      await expect(page.locator('link[rel="manifest"]')).toHaveAttribute(
        "href",
        "/site.webmanifest",
      );
      await expect(page.locator('link[rel="apple-touch-icon"]')).toHaveAttribute(
        "href",
        "/apple-touch-icon.png",
      );
      await expect(page.locator('meta[name="theme-color"]')).toHaveAttribute("content", "#FAF8F4");

      const response = await page.request.get("/site.webmanifest");
      expect(response.status()).toBe(200);
      const manifest = await response.json();
      expect(manifest).toMatchObject({ name: "Jatiteknologi", start_url: "/" });
      expect(manifest.icons).toEqual([
        expect.objectContaining({ sizes: "192x192", purpose: "any" }),
        expect.objectContaining({ sizes: "512x512", purpose: "any" }),
        expect.objectContaining({ sizes: "512x512", purpose: "maskable" }),
      ]);

      const iconPaths = [
        ...manifest.icons.map((icon: { src: string }) => icon.src),
        "/apple-touch-icon.png",
      ];

      for (const iconPath of iconPaths) {
        const iconResponse = await page.request.get(iconPath);
        expect(iconResponse.status()).toBe(200);
        expect(iconResponse.headers()["content-type"]).toContain("image/png");
      }
    });
  }
});
