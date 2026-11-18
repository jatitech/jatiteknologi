import { expect, test } from "../fixtures";

import { PLATFORM_PAGES } from "../platform-pages/pages";

test.describe("Home page", () => {
  test("Links each platform tile to its page, with an arrow on hover", async ({ page }) => {
    for (const locale of ["id", "en"] as const) {
      const path = locale === "en" ? "/en" : "/";
      const label = locale === "en" ? "service page" : "halaman layanan";

      await page.goto(path);

      for (const { copy, path: target } of PLATFORM_PAGES.filter(
        (item) => item.locale === locale,
      )) {
        const tile = page.getByRole("link", { name: `${copy.name}: ${label}`, exact: true });

        await expect(tile, copy.name).toHaveAttribute("href", target);

        const arrow = tile.locator(".i-ph-arrow-up-right");
        await expect(arrow, copy.name).toBeHidden();
        await tile.hover();
        await expect(arrow, copy.name).toBeVisible();
      }

      // Following one tile opens its page.
      const first = PLATFORM_PAGES.find((item) => item.locale === locale && item.slug === "odoo");
      await page.getByRole("link", { name: `${first?.copy.name}: ${label}`, exact: true }).click();
      await expect(page).toHaveURL(new RegExp(`${first?.path}$`));
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    }
  });
});
