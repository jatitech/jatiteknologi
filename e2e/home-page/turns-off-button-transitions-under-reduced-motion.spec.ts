import { expect, test } from "../fixtures";

test.describe("Home page", () => {
  test("Turns off button transitions under reduced motion", async ({ page }) => {
    // The closing section repeats both buttons, so the hero's are found by their section.
    const hero = page.locator("main section").first();
    const primary = hero.getByRole("link", { name: "Jadwalkan obrolan" });
    const secondary = hero.getByRole("link", { name: "Kirim email" });

    // The default run proves the buttons animate at all, so the reduced run is a real change.
    await page.emulateMedia({ reducedMotion: "no-preference" });
    await page.goto("/");
    await expect(primary).toHaveCSS("transition-duration", "0.15s");

    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");

    for (const button of [primary, secondary]) {
      await expect(button).toHaveCSS("transition-duration", "0s");
      await expect(button).toHaveCSS("animation-name", "none");
    }
  });
});
