import { expect, test } from "../fixtures";

test.describe("Home page", () => {
  test("Tabs to the hero buttons, each with a focus ring", async ({ page, browserName }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/");

    // The closing section repeats both buttons, so the hero's are found by their section.
    const hero = page.locator("main section").first();
    const primary = hero.getByRole("link", { name: "Jadwalkan obrolan" });
    const secondary = hero.getByRole("link", { name: "Kirim email" });

    // The order the browser tabs through the hero's links, read from the DOM.
    const tabOrder = await hero.evaluate((section) =>
      [...section.querySelectorAll("a[href], button")].flatMap((element) =>
        element instanceof HTMLElement && element.tabIndex >= 0
          ? [(element.textContent ?? "").trim()]
          : [],
      ),
    );

    expect(tabOrder).toEqual(["Jadwalkan obrolan", "Kirim email"]);

    // WebKit on macOS does not Tab to links by default, so the walk starts from the first button.
    await primary.focus();
    await expect(primary).toBeFocused();
    await expect(primary).toHaveCSS("outline-width", "2px");

    if (browserName !== "webkit") {
      await page.keyboard.press("Tab");
      await expect(secondary).toBeFocused();
    }

    await secondary.focus();
    await expect(secondary).toHaveCSS("outline-width", "2px");
  });
});
