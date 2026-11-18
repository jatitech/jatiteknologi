import { expect, test } from "../fixtures";

test.describe("Home page", () => {
  test("Has no WCAG 2.2 AA violations", async ({ page, makeAxeBuilder }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

    const results = await makeAxeBuilder().analyze();
    expect(results.violations).toEqual([]);
  });
});
