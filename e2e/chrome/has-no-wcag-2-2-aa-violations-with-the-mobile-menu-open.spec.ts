import { expect, test } from "../fixtures";
import { answerUpgradedRequestsOverHttp } from "../answer-upgraded-requests";
import { PREVIEW_URL } from "../origins";

// Scanned on the built site, which is what ships. The dev toolbar is not part of it.
test.use({ baseURL: PREVIEW_URL, viewport: { width: 360, height: 740 } });

test.describe("Accessibility", () => {
  test("Has no WCAG 2.2 AA violations with the mobile menu open", async ({
    page,
    makeAxeBuilder,
  }) => {
    await answerUpgradedRequestsOverHttp(page);
    await page.goto("/");
    await page.getByRole("banner").getByRole("button", { name: "Menu" }).click();
    await expect(page.getByRole("dialog", { name: "Menu" })).toBeVisible();

    const results = await makeAxeBuilder().analyze();
    expect(results.violations).toEqual([]);
  });
});
