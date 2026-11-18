import { expect, test } from "../fixtures";
import { PREVIEW_URL } from "../origins";

import { PLATFORM_PAGES } from "./pages";

test.use({ baseURL: PREVIEW_URL });

const WIDTHS = [320, 360, 768, 1024, 1440] as const;

test.describe("Platform page", () => {
  test("Has no horizontal overflow at five widths on every platform page in both locales", async ({
    page,
  }) => {
    // Sixty full loads. WebKit runs them slowly under load, so the limit is generous.
    test.setTimeout(480_000);

    for (const { path } of PLATFORM_PAGES) {
      for (const width of WIDTHS) {
        await page.setViewportSize({ width, height: 900 });
        await page.goto(path);
        await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

        const overflow = await page.evaluate(
          () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
        );

        expect(overflow, `${path} at ${width}px`).toBe(0);
      }
    }
  });
});
