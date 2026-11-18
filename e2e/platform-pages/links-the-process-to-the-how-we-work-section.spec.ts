import { expect, test } from "../fixtures";
import { answerUpgradedRequestsOverHttp } from "../answer-upgraded-requests";
import { PREVIEW_URL } from "../origins";

test.use({ baseURL: PREVIEW_URL });

const PROCESS_LINKS = [
  {
    path: "/layanan/frappe-erpnext",
    name: "Cara kami bekerja: dengarkan, rancang, bangun bertahap, dampingi →",
    anchor: "cara-kerja",
  },
  {
    path: "/en/services/frappe-erpnext",
    name: "How we work: listen, plan, build in stages, stay with you →",
    anchor: "how-we-work",
  },
] as const;

test.describe("Platform page", () => {
  test("Links the process line to the how-we-work section on the home page", async ({ page }) => {
    // Two full navigations per locale, and WebKit runs them slowly under load. The axe suites allow 180s too.
    test.setTimeout(120_000);
    await answerUpgradedRequestsOverHttp(page);

    for (const { path, name, anchor } of PROCESS_LINKS) {
      await page.goto(path);

      const link = page.getByRole("link", { name });
      await expect(link).toHaveAttribute("href", new RegExp(`/?(en)?#${anchor}$`));

      await link.click();

      await expect(page).toHaveURL(new RegExp(`#${anchor}$`));
      // Let the home page finish loading before the next navigation starts, so the next goto is not cancelled.
      await page.waitForLoadState("load");
      await expect(page.locator(`#${anchor}`)).toBeAttached();
    }
  });
});
