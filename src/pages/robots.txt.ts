import type { APIRoute } from "astro";

import { renderRobots } from "@/shared/security";

export const prerender = true;

export const GET: APIRoute = ({ site }) =>
  new Response(renderRobots(site), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
