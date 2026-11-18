import { expect, test } from "../fixtures";
import { PREVIEW_URL } from "../origins";

test.use({ baseURL: PREVIEW_URL });

test.describe("Security headers", () => {
  test("Serves hashed assets with nosniff and an immutable cache", async ({ page, request }) => {
    await page.goto("/");

    const stylesheet = await page.locator('link[rel="stylesheet"]').first().getAttribute("href");
    expect(stylesheet).toMatch(/^\/_astro\/.+\.css$/);

    const response = await request.get(stylesheet ?? "");

    expect(response.status()).toBe(200);
    expect(response.headers()).toMatchObject({
      "x-content-type-options": "nosniff",
      "cache-control": "public, max-age=31536000, immutable",
    });
  });
});
