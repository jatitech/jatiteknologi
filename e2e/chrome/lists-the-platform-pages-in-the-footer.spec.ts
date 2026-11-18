import { expect, test } from "../fixtures";

import { PLATFORM_PAGES } from "../platform-pages/pages";

test.describe("Site chrome", () => {
  test("Lists the six platform pages and the process link in the footer of both homes", async ({
    page,
  }) => {
    for (const [path, locale, process] of [
      ["/", "id", { name: "Cara kerja", href: "/#cara-kerja" }],
      ["/en", "en", { name: "How we work", href: "/en#how-we-work" }],
    ] as const) {
      await page.goto(path);

      const footer = page.getByRole("contentinfo");

      for (const { copy, path: target } of PLATFORM_PAGES.filter(
        (item) => item.locale === locale,
      )) {
        await expect(footer.getByRole("link", { name: copy.name, exact: true })).toHaveAttribute(
          "href",
          target,
        );
      }

      await expect(footer.getByRole("link", { name: process.name, exact: true })).toHaveAttribute(
        "href",
        process.href,
      );
    }
  });
});
