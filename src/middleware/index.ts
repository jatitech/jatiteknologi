import { defineMiddleware } from "astro:middleware";

import { applySecurityHeaders } from "@/shared/security";

/**
 * Adds the security headers to on-demand responses. Prerendered pages and static assets get them
 * from `public/_headers`, which the Worker never sees.
 */
export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();

  applySecurityHeaders(response.headers, context.url.hostname);

  return response;
});
