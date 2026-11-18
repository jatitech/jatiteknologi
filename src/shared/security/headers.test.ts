import { readFileSync } from "node:fs";

import { describe, expect, it } from "vite-plus/test";

import { applySecurityHeaders, CSP_DIRECTIVES, renderHeadersFile } from "./headers";

const HEADERS_FILE = new URL("../../../public/_headers", import.meta.url);

describe("renderHeadersFile", () => {
  it("matches public/_headers, so a header change needs the file updated too", () => {
    expect(readFileSync(HEADERS_FILE, "utf8")).toBe(renderHeadersFile());
  });

  it("leaves Cache-Control out so the adapter's immutable rule for /_astro/* still ships", () => {
    expect(renderHeadersFile()).not.toContain("Cache-Control");
  });
});

describe("applySecurityHeaders", () => {
  it("sets the transport, sniffing, referrer, isolation and framing headers", () => {
    const headers = new Headers();

    applySecurityHeaders(headers, "jatiteknologi.id");

    expect(headers.get("strict-transport-security")).toBe("max-age=31536000; includeSubDomains");
    expect(headers.get("x-content-type-options")).toBe("nosniff");
    expect(headers.get("referrer-policy")).toBe("strict-origin-when-cross-origin");
    expect(headers.get("cross-origin-opener-policy")).toBe("same-origin");
    expect(headers.get("x-frame-options")).toBe("DENY");
  });

  it("denies the browser features the site does not use", () => {
    const headers = new Headers();

    applySecurityHeaders(headers, "jatiteknologi.id");

    expect(headers.get("permissions-policy")).toBe(
      "accelerometer=(), browsing-topics=(), camera=(), display-capture=(), geolocation=(), gyroscope=(), hid=(), interest-cohort=(), magnetometer=(), microphone=(), payment=(), serial=(), usb=()",
    );
  });

  it("adds frame-ancestors to a policy Astro already set", () => {
    const headers = new Headers({
      "Content-Security-Policy": "default-src 'self'; script-src 'self' 'sha256-abc'",
    });

    applySecurityHeaders(headers, "jatiteknologi.id");

    expect(headers.get("content-security-policy")).toBe(
      "default-src 'self'; script-src 'self' 'sha256-abc'; frame-ancestors 'none'",
    );
  });

  it("adds frame-ancestors after the trailing semicolon Astro writes", () => {
    const headers = new Headers({
      "Content-Security-Policy":
        "default-src 'self';img-src 'self' data:;upgrade-insecure-requests;",
    });

    applySecurityHeaders(headers, "jatiteknologi.id");

    expect(headers.get("content-security-policy")).toBe(
      "default-src 'self'; img-src 'self' data:; upgrade-insecure-requests; frame-ancestors 'none'",
    );
  });

  it("keeps a frame-ancestors directive that the policy already sets", () => {
    const headers = new Headers({
      "Content-Security-Policy": "default-src 'self'; frame-ancestors 'self'",
    });

    applySecurityHeaders(headers, "jatiteknologi.id");

    expect(headers.get("content-security-policy")).toBe(
      "default-src 'self'; frame-ancestors 'self'",
    );
  });

  it("asks search engines not to index a workers.dev response", () => {
    const headers = new Headers();

    applySecurityHeaders(headers, "jatiteknologi.risqi-romadhoni96.workers.dev");

    expect(headers.get("x-robots-tag")).toBe("noindex, nofollow");
  });

  it("does not set X-Robots-Tag on a custom domain", () => {
    const headers = new Headers();

    applySecurityHeaders(headers, "jatiteknologi.id");

    expect(headers.has("x-robots-tag")).toBe(false);
  });
});

describe("CSP_DIRECTIVES", () => {
  it("allows no inline code, eval, wildcard or remote origin", () => {
    const policy = [...CSP_DIRECTIVES, "frame-ancestors 'none'"].join("; ");

    expect(policy).not.toMatch(/unsafe-|https?:|\*/);
  });
});
