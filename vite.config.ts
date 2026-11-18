import { fileURLToPath } from "node:url";

import { defineConfig } from "vite-plus";
import { playwright } from "vite-plus/test/browser-playwright";

import { TOOLING_IGNORE_PATTERNS } from "./tools/ignore-patterns.ts";

const BROWSER_TESTS = "src/**/*.browser.test.ts";

export default defineConfig({
  resolve: {
    alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
  },
  test: {
    restoreMocks: true,
    projects: [
      {
        extends: true,
        test: {
          name: "unit",
          environment: "node",
          include: ["src/**/*.test.ts"],
          exclude: [BROWSER_TESTS],
        },
      },
      {
        extends: true,
        test: {
          name: "browser",
          include: [BROWSER_TESTS],
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({
              contextOptions: { permissions: ["clipboard-read", "clipboard-write"] },
            }),
            instances: [{ browser: "chromium" }],
          },
        },
      },
      {
        extends: true,
        test: {
          name: "types",
          typecheck: {
            enabled: true,
            only: true,
            include: ["src/**/*.test-d.ts"],
          },
        },
      },
    ],
  },
  staged: {
    "*": () => ["vpr check:fix", "vp test"],
  },
  fmt: {
    ignorePatterns: [
      ...TOOLING_IGNORE_PATTERNS,
      // Brand and design sources, written by hand outside the formatter.
      "BRAND.md",
      "DESIGN.md",
      "brand/**",
      "docs/**",
      "specs/**",
      "CHANGELOG.md",
      ".release-please-manifest.json",
      // Void rewrites it in its own format whenever its plugin loads.
      "void.lock.json",
    ],
  },
  lint: {
    ignorePatterns: TOOLING_IGNORE_PATTERNS,
    jsPlugins: [
      { name: "vite-plus", specifier: "vite-plus/oxlint-plugin" },
      { name: "anti-slop", specifier: "./tools/oxlint/anti-slop/index.ts" },
    ],
    rules: {
      "vite-plus/prefer-vite-plus-imports": "error",
      "no-unused-vars": "error",
      "max-lines": [
        "error",
        {
          max: 200,
          skipBlankLines: false,
          skipComments: false,
        },
      ],
      "oxc/no-accumulating-spread": "error",
      "anti-slop/no-array-filter-map": "error",
      "anti-slop/no-reduce-accumulator-copy": "error",
      "anti-slop/no-chained-type-assertions": "error",
      "anti-slop/no-conditional-empty-object-spread": "error",
      "anti-slop/no-known-value-widening": "error",
      "anti-slop/no-module-mocking": "error",
      "anti-slop/no-object-parameters": "error",
      "anti-slop/no-reflect-apply": "error",
      "anti-slop/no-reflect-get": "error",
      "anti-slop/no-runtime-typeof": "error",
      "anti-slop/no-shape-in-symbol-names": "error",
      "anti-slop/no-unknown-parameters": "error",
      "anti-slop/no-unknown-returns": "error",
      "anti-slop/no-unknown-type-aliases": "error",
      "anti-slop/no-unsafe-dictionary-type": "error",
      "anti-slop/no-widen-then-assert": "error",
      "anti-slop/require-readable-spacing": "error",
      "anti-slop/require-safety-comment-for-type-assertion": "error",
    },
    options: { typeAware: true, typeCheck: true },
  },
});
