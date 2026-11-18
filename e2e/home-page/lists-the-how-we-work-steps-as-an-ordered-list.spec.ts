import { expect, test } from "../fixtures";

test.describe("Home page", () => {
  test("Lists the how-we-work steps as an ordered list", async ({ page }) => {
    for (const [path, anchor] of [
      ["/", "cara-kerja"],
      ["/en", "how-we-work"],
    ] as const) {
      await page.goto(path);

      await expect(page.locator(`#${anchor} ol`)).toHaveCount(1);
      await expect(page.locator(`#${anchor} ol > li`)).toHaveCount(4);
    }
  });
});
