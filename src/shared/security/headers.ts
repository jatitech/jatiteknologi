/**
 * Security headers for every response the site sends, defined in one place. `public/_headers` is
 * generated from this module for prerendered pages and static assets, and the middleware applies it
 * to on-demand responses. `headers.test.ts` fails when `public/_headers` drifts from it.
 */

/**
 * Directives Astro writes into the content security policy (`security.csp.directives` in
 * `astro.config.mjs`). Astro adds the hashes of its own inline scripts and styles to `script-src`
 * and `style-src`: in a `<meta>` on prerendered pages, and in the response header on on-demand ones.
 */
export const CSP_DIRECTIVES = [
  "default-src 'self'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
] as const;

/** Features the site never uses, denied for the page and for every frame it embeds. */
const PERMISSIONS_POLICY = [
  "accelerometer=()",
  "browsing-topics=()",
  "camera=()",
  "display-capture=()",
  "geolocation=()",
  "gyroscope=()",
  "hid=()",
  "interest-cohort=()",
  "magnetometer=()",
  "microphone=()",
  "payment=()",
  "serial=()",
  "usb=()",
].join(", ");

/**
 * Sent on every response. `Cache-Control` is left out on purpose: the Cloudflare adapter skips its
 * immutable rule for `/_astro/*` when any `_headers` rule that matches those paths sets it.
 */
const SECURITY_HEADERS = {
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": PERMISSIONS_POLICY,
  "Cross-Origin-Opener-Policy": "same-origin",
  "X-Frame-Options": "DENY",
  "Content-Security-Policy": "frame-ancestors 'none'",
} as const;

const CONTENT_SECURITY_POLICY = "Content-Security-Policy";

/** The text of `public/_headers`: one rule that matches every path. */
export function renderHeadersFile(): string {
  const rules = Object.entries(SECURITY_HEADERS).map(([name, value]) => `  ${name}: ${value}`);

  return ["/*", ...rules, ""].join("\n");
}

/**
 * Sets the security headers on a response. A policy that Astro already set on an on-demand response
 * keeps its directives, and `frame-ancestors` is added only when it is missing. `workers.dev` hosts
 * also ask search engines not to index the response.
 */
export function applySecurityHeaders(headers: Headers, hostname: string): void {
  for (const [name, value] of Object.entries(SECURITY_HEADERS)) {
    const isPolicy = name === CONTENT_SECURITY_POLICY;

    headers.set(name, isPolicy ? mergePolicy(headers.get(name), value) : value);
  }

  if (isWorkersDevHost(hostname)) headers.set("X-Robots-Tag", "noindex, nofollow");
}

/**
 * Keeps the directives `existing` sets and appends the ones of `addition` that it does not. Astro ends
 * its policy with a `;`, so empty entries are dropped.
 */
function mergePolicy(existing: string | null, addition: string): string {
  const current = (existing ?? "")
    .split(";")
    .map((directive) => directive.trim())
    .filter((directive) => directive !== "");

  const named = new Set(current.map(directiveName));

  const missing = addition
    .split(";")
    .map((directive) => directive.trim())
    .filter((directive) => !named.has(directiveName(directive)));

  return [...current, ...missing].join("; ");
}

/** `script-src 'self'` becomes `script-src`. */
function directiveName(directive: string): string {
  return directive.trim().split(" ")[0];
}

/** `workers.dev` hosts: the Worker's default URL and the preview URL of each version. */
export function isWorkersDevHost(hostname: string): boolean {
  return hostname.endsWith(".workers.dev");
}
