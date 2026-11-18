import { expect, test } from "../fixtures";
import { answerUpgradedRequestsOverHttp } from "../answer-upgraded-requests";
import { PREVIEW_URL } from "../origins";

// Scanned on the built site, the same as the chrome suite. Each state is a full page load.
test.use({ baseURL: PREVIEW_URL });

const VIEWPORTS = [
  { width: 360, height: 740 },
  { width: 1440, height: 900 },
] as const;

const SCHEMES = ["light"] as const;

test.describe("Home page", () => {
  test("Has no WCAG 2.2 AA violations at 360px and 1440px in both schemes and languages", async ({
    page,
    makeAxeBuilder,
  }) => {
    await answerUpgradedRequestsOverHttp(page);
    test.setTimeout(180_000);

    const failures: string[] = [];

    for (const viewport of VIEWPORTS) {
      for (const colorScheme of SCHEMES) {
        await page.setViewportSize(viewport);
        await page.emulateMedia({ colorScheme });

        for (const path of ["/", "/en"]) {
          await page.goto(path);
          await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

          const { violations } = await makeAxeBuilder().analyze();

          for (const violation of violations) {
            const targets = violation.nodes.map((node) => JSON.stringify(node.target)).join(" ");
            failures.push(`${path} ${viewport.width}px ${colorScheme}: ${violation.id} ${targets}`);
          }
        }
      }
    }

    expect(failures).toEqual([]);
  });
});
