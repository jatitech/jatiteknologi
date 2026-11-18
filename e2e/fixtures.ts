import AxeBuilder from "@axe-core/playwright";
import { test as base } from "@playwright/test";

const WCAG_22_AA_TAGS = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22a", "wcag22aa"];

type AxeFixtures = {
  makeAxeBuilder: () => AxeBuilder;
};

/**
 * Playwright `test` with `makeAxeBuilder`, an axe scan limited to WCAG 2.2 Level A and AA rules,
 * the site's accessibility target.
 */
export const test = base.extend<AxeFixtures>({
  makeAxeBuilder: async ({ page }, use) => {
    await use(() => new AxeBuilder({ page }).withTags(WCAG_22_AA_TAGS));
  },
});

export { expect } from "@playwright/test";
