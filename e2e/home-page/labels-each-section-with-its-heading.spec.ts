import { expect, test } from "../fixtures";

test.describe("Home page", () => {
  test("Labels each section with its heading", async ({ page }) => {
    for (const path of ["/", "/en"]) {
      await page.goto(path);

      const sections = page.locator("main section[aria-labelledby]");
      await expect(sections).toHaveCount(8);

      const headingIds = await sections.evaluateAll((elements) =>
        elements.map((element) => element.getAttribute("aria-labelledby") ?? ""),
      );

      for (const id of headingIds) {
        const tagName = await page.locator(`#${id}`).evaluate((element) => element.tagName);
        expect(tagName, `${path} heading #${id}`).toMatch(/^H[12]$/);
      }
    }
  });
});
