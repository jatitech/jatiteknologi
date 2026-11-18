import { expect, test } from "../fixtures";

test.describe("Home page", () => {
  test("Shows the founder portrait with alt text that names the founder, in both languages", async ({
    page,
  }) => {
    for (const [path, alt] of [
      ["/", "Potret Risqi Romadhoni, pendiri Jatiteknologi"],
      ["/en", "Portrait of Risqi Romadhoni, founder of Jatiteknologi"],
    ] as const) {
      await page.goto(path);

      const portrait = page.getByRole("img", { name: alt, exact: true });
      await portrait.scrollIntoViewIfNeeded();
      await expect(portrait, path).toBeVisible();
      await expect(portrait, path).toHaveAttribute("width", "400");
      await expect(portrait, path).toHaveAttribute("height", "480");

      // The image loads lazily, so it decodes a moment after it scrolls into view.
      await expect
        .poll(() => portrait.evaluate((img) => ("naturalWidth" in img ? img.naturalWidth : 0)), {
          message: `${path} decoded`,
        })
        .toBeGreaterThan(0);
    }
  });
});
