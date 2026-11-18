import { expect, test } from "../fixtures";
import { PREVIEW_URL } from "../origins";

import { PLATFORM_PAGES } from "./pages";

test.use({ baseURL: PREVIEW_URL });

test.describe("Platform page", () => {
  test("Shows the h1 and section headings of every platform page in both locales", async ({
    page,
  }) => {
    test.setTimeout(180_000);

    for (const { path, copy, shared } of PLATFORM_PAGES) {
      await page.goto(path);

      await expect(page.getByRole("heading", { level: 1 })).toHaveText(copy.hero.headline);

      const headings = [
        copy.problems.title,
        shared.builds.title,
        ...(copy.extra ? [copy.extra.title] : []),
        shared.flow.title,
        copy.limits.title,
        shared.experience.title,
        shared.terms.title,
        shared.closing.headline,
      ];

      for (const heading of headings) {
        await expect(page.getByRole("heading", { level: 2, name: heading }), path).toBeVisible();
      }

      // Hero, problems, solutions, [extra], flow, limits, experience, terms, closing.
      await expect(page.locator("main section[aria-labelledby]"), path).toHaveCount(
        copy.extra ? 9 : 8,
      );
    }
  });
});
