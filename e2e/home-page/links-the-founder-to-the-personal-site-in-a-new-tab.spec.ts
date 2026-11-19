import { expect, test } from "../fixtures";

test.describe("Home page", () => {
  test("Links the founder's personal site in a new tab, with a ref parameter and a spoken warning", async ({
    page,
  }) => {
    for (const [path, name] of [
      ["/", "Situs pribadi saya (dibuka di tab baru)"],
      ["/en", "My personal site (opens in a new tab)"],
    ] as const) {
      await page.goto(path);

      const link = page.getByRole("link", { name, exact: true });
      await expect(link, path).toHaveAttribute(
        "href",
        "https://www.heyris.me/?ref=jatiteknologi.com",
      );
      await expect(link, path).toHaveAttribute("target", "_blank");
      await expect(link, path).toHaveAttribute("rel", "noopener");
    }
  });
});
