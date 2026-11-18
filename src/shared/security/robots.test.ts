import { describe, expect, it } from "vite-plus/test";

import { renderRobots } from "./robots";

const DISALLOW_ALL = "User-agent: *\nDisallow: /\n";

describe("renderRobots", () => {
  it("disallows every path on the workers.dev default URL", () => {
    expect(renderRobots(new URL("https://jatiteknologi.risqi-romadhoni96.workers.dev/"))).toBe(
      DISALLOW_ALL,
    );
  });

  it("disallows every path on a workers.dev preview URL", () => {
    expect(
      renderRobots(new URL("https://abc123-jatiteknologi.risqi-romadhoni96.workers.dev/")),
    ).toBe(DISALLOW_ALL);
  });

  it("allows crawling and names the sitemap on a custom domain", () => {
    expect(renderRobots(new URL("https://jatiteknologi.id/"))).toBe(
      "User-agent: *\nAllow: /\n\nSitemap: https://jatiteknologi.id/sitemap-index.xml\n",
    );
  });

  it("disallows every path when no site is configured", () => {
    expect(renderRobots(undefined)).toBe(DISALLOW_ALL);
  });
});
