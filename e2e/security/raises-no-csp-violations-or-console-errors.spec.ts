import { expect, test } from "../fixtures";
import { answerUpgradedRequestsOverHttp } from "../answer-upgraded-requests";
import { PREVIEW_URL } from "../origins";
import { PLATFORM_PAGES } from "../platform-pages/pages";

declare global {
  interface Window {
    cspViolations: string[];
  }
}

test.use({ baseURL: PREVIEW_URL });

test.describe("Content security policy", () => {
  test("Raises no CSP violations or console errors on the homes and every platform page", async ({
    page,
  }) => {
    test.setTimeout(240_000);
    await answerUpgradedRequestsOverHttp(page);

    const errors: string[] = [];
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });
    page.on("pageerror", (error) => errors.push(error.message));

    await page.addInitScript(() => {
      window.cspViolations = [];
      document.addEventListener("securitypolicyviolation", (event) => {
        window.cspViolations.push(`${event.violatedDirective} ${event.blockedURI}`);
      });
    });

    for (const path of ["/", "/en", ...PLATFORM_PAGES.map((item) => item.path)]) {
      await page.goto(path);
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
      await page.evaluate(() => document.fonts.ready);

      expect(await page.evaluate(() => window.cspViolations), path).toEqual([]);
    }

    expect(errors).toEqual([]);
  });
});
