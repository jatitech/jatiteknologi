import { expect, test } from "../fixtures";
import { answerUpgradedRequestsOverHttp } from "../answer-upgraded-requests";
import { PREVIEW_URL } from "../origins";

const PAGES = ["/", "/en", "/halaman-yang-tidak-ada", "/en/page-that-does-not-exist"] as const;

const VIEWPORTS = [
  { width: 360, height: 740 },
  { width: 1440, height: 900 },
] as const;

const SCHEMES = ["light"] as const;

/** One axe rule that failed in one state, with the elements it failed on. */
interface Failure {
  id: string;
  targets: string[];
}

// Scanned on the built site, which is what ships. Each state is a full page load, so the time limit is raised.
test.use({ baseURL: PREVIEW_URL });

test.describe("Accessibility", () => {
  test("Has no WCAG 2.2 AA violations on every page, width and colour scheme", async ({
    page,
    makeAxeBuilder,
  }) => {
    await answerUpgradedRequestsOverHttp(page);
    test.setTimeout(180_000);
    const failures: Record<string, Failure[]> = {};

    for (const viewport of VIEWPORTS) {
      for (const colorScheme of SCHEMES) {
        await page.setViewportSize(viewport);
        await page.emulateMedia({ colorScheme });

        for (const path of PAGES) {
          await page.goto(path);
          await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

          const { violations } = await makeAxeBuilder().analyze();

          if (violations.length > 0) {
            failures[`${path} ${viewport.width}px ${colorScheme}`] = violations.map(
              (violation) => ({
                id: violation.id,
                targets: violation.nodes.map((node) => JSON.stringify(node.target)),
              }),
            );
          }
        }
      }
    }

    expect(failures).toEqual({});
  });
});
