import { expect, test } from "../fixtures";
import { PREVIEW_URL } from "../origins";

import { PLATFORM_PAGES } from "./pages";

test.use({ baseURL: PREVIEW_URL });

test.describe("Platform page", () => {
  test("Shows the brand as text, with no logo image, and keeps brand names untranslated", async ({
    page,
  }) => {
    for (const { path, copy } of PLATFORM_PAGES) {
      await page.goto(path);

      // The header and footer carry the Jatiteknologi logo outside `main`. The page has no image of its own.
      await expect(page.locator("main img"), path).toHaveCount(0);

      // The hero panel and the flow diagram both name the platform, and both are untranslated.
      const named = await page.locator('[translate="no"]', { hasText: copy.name }).count();
      expect(named, path).toBeGreaterThan(1);
    }
  });
});
