/**
 * Where the e2e servers listen. `astro dev` serves most specs. `astro preview` serves the built site,
 * which is the only place `public/_headers` takes effect, so the `security/` specs run against it.
 */
export const DEV_URL = "http://localhost:4321";
export const PREVIEW_URL = "http://localhost:4322";
