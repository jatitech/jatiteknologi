import { expect, test } from "../fixtures";

test.describe("Design tokens", () => {
  test("Loads the fonts from the site's own origin", async ({ page }) => {
    const requestedUrls: string[] = [];
    page.on("request", (request) => requestedUrls.push(request.url()));

    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

    const loadedFamilies = await page.evaluate(async () => {
      await document.fonts.ready;

      return [...document.fonts].flatMap((face) => (face.status === "loaded" ? [face.family] : []));
    });

    const origin = new URL(page.url()).origin;
    const fontUrls = requestedUrls.filter((url) => new URL(url).pathname.endsWith(".woff2"));
    expect(fontUrls.length).toBeGreaterThan(0);
    expect(loadedFamilies.some((family) => family.includes("Plus Jakarta Sans"))).toBe(true);
    expect(requestedUrls.filter((url) => new URL(url).origin !== origin)).toEqual([]);
  });
});
