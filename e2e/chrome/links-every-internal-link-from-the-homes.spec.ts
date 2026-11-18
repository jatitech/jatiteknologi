import { expect, test } from "../fixtures";
import { answerUpgradedRequestsOverHttp } from "../answer-upgraded-requests";
import { PREVIEW_URL } from "../origins";
import { PLATFORM_PAGES } from "../platform-pages/pages";

test.use({ baseURL: PREVIEW_URL });

test.describe("Site chrome", () => {
  test("Answers 200 for every internal link on the homes and the platform pages", async ({
    page,
  }) => {
    test.setTimeout(240_000);
    await answerUpgradedRequestsOverHttp(page);

    const sources = ["/", "/en", ...PLATFORM_PAGES.map((item) => item.path)];
    const targets = new Set<string>();

    for (const source of sources) {
      await page.goto(source);

      const hrefs = await page
        .locator("a[href]")
        .evaluateAll((links) => links.map((link) => link.getAttribute("href") ?? ""));

      for (const href of hrefs) {
        // Only same-site paths: mail links, external links, and in-page anchors are not crawled.
        if (!href.startsWith("/") || href.startsWith("//")) continue;

        targets.add(href.split("#")[0] || "/");
      }
    }

    expect([...targets]).toEqual(expect.arrayContaining(sources));

    const broken: string[] = [];

    for (const target of targets) {
      const response = await page.request.get(target);

      if (response.status() !== 200) broken.push(`${target} ${response.status()}`);
    }

    expect(broken).toEqual([]);
  });
});
