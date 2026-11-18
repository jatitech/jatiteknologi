import { isWorkersDevHost } from "./headers";

const DISALLOW_ALL = "User-agent: *\nDisallow: /\n";

/**
 * The `robots.txt` body for a site. Search engines may crawl a custom domain. A `workers.dev` host,
 * the default URL or a preview URL, is disallowed so that it stays out of search results.
 */
export function renderRobots(site: URL | undefined): string {
  if (site === undefined || isWorkersDevHost(site.hostname)) return DISALLOW_ALL;

  return `User-agent: *\nAllow: /\n\nSitemap: ${new URL("/sitemap-index.xml", site).href}\n`;
}
