import type { KnipConfig } from "knip";

import { TOOLING_IGNORE_PATTERNS } from "./tools/ignore-patterns.ts";

const config: KnipConfig = {
  entry: ["env.ts", "void.config.ts", "unlighthouse.config.ts"],
  project: ["**/*", ...TOOLING_IGNORE_PATTERNS.map((pattern) => `!${pattern}`)],
  astro: {
    config: ["astro.config.{js,cjs,mjs,ts,mts}"],
  },
};

export default config;
