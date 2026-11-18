import { defineEnv, url } from "void/env";

/** The site URL when the build shell doesn't set `VITE_APP_SITE`. */
export const DEFAULT_APP_SITE = "https://jatiteknologi.risqi-romadhoni96.workers.dev" as const;

export default defineEnv({
  VITE_APP_SITE: url().default(DEFAULT_APP_SITE),
});
