import { expect, test } from "../fixtures";

import { PLATFORM_PAGES } from "../platform-pages/pages";

test.use({ viewport: { width: 1440, height: 900 } });

test.describe("Site chrome", () => {
  test("Opens the Layanan disclosure in the header and lists the six platform pages", async ({
    page,
  }) => {
    for (const [path, locale, heading] of [
      ["/", "id", "Layanan"],
      ["/en", "en", "Services"],
    ] as const) {
      await page.goto(path);

      const banner = page.getByRole("banner");
      const summary = banner.locator("details summary", { hasText: heading });
      await expect(summary).toBeVisible();
      await summary.click();

      for (const { copy, path: target } of PLATFORM_PAGES.filter(
        (item) => item.locale === locale,
      )) {
        await expect(banner.getByRole("link", { name: copy.name, exact: true })).toHaveAttribute(
          "href",
          target,
        );
      }
    }
  });
});
