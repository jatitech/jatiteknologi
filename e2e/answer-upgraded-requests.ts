import { buffer } from "node:stream/consumers";

import type { Page } from "@playwright/test";

import { PREVIEW_URL } from "./origins";

/**
 * `upgrade-insecure-requests` makes WebKit request the local preview's http:// files over https://,
 * and the preview has no TLS, so styles and scripts never load. This answers each upgraded request
 * with the same response over http, and must be set before the first `goto`. Production is already
 * https, so the upgrade is a no-op there.
 */
export async function answerUpgradedRequestsOverHttp(page: Page): Promise<void> {
  await page.route(`${PREVIEW_URL.replace("http://", "https://")}/**`, async (route) => {
    const upstream = await fetch(route.request().url().replace("https://", "http://"));

    await route.fulfill({
      status: upstream.status,
      headers: Object.fromEntries(upstream.headers),
      body: upstream.body === null ? "" : await buffer(upstream.body),
    });
  });
}
