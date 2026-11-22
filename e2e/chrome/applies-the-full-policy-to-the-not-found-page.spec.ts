import { expect, test } from "../fixtures";
import { answerUpgradedRequestsOverHttp } from "../answer-upgraded-requests";
import { PREVIEW_URL } from "../origins";

test.use({ baseURL: PREVIEW_URL });

const NOT_FOUND_PATH = "/halaman-yang-tidak-ada";

test.describe("Not-found page", () => {
  test("Applies the full content security policy and raises no violations", async ({ page }) => {
    await answerUpgradedRequestsOverHttp(page);

    const errors: Array<string> = [];
    // Chromium logs the 404 navigation itself as a console error. Only errors from elsewhere count.
    page.on("console", (message) => {
      if (message.type() === "error" && !message.location().url.endsWith(NOT_FOUND_PATH)) {
        errors.push(message.text());
      }
    });
    page.on("pageerror", (error) => errors.push(error.message));

    const response = await page.goto(NOT_FOUND_PATH);
    expect(response?.status()).toBe(404);

    const policy = await page
      .locator('meta[http-equiv="content-security-policy"]')
      .getAttribute("content");

    expect(policy).toContain("default-src 'self'");
    expect(policy).toContain("script-src 'self' 'sha256-");
    expect(policy).toContain("upgrade-insecure-requests");
    expect(errors).toEqual([]);
  });
});
