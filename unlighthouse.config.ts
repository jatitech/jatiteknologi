import { defineUnlighthouseConfig } from "unlighthouse/config";

export default defineUnlighthouseConfig({
  site: "http://localhost:4321",
  // Scan the English pages too. Unlighthouse skips a page whose hreflang alternate is another page.
  scanner: { ignoreI18nPages: false },
  ci: {
    budget: {
      performance: 90,
      accessibility: 100,
      "best-practices": 100,
      seo: 90,
    },
    buildStatic: true,
  },
});
