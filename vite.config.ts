import { fileURLToPath } from "node:url";

import cloudflare from "@cloudflare/oxlint-config";
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
    // Spread the preset: `extends` drops its `env` in Oxlint 1.94.
    ...cloudflare,
    ignorePatterns: [...(cloudflare.ignorePatterns ?? []), ...TOOLING_IGNORE_PATTERNS],
    jsPlugins: [
      ...(cloudflare.jsPlugins ?? []),
      { name: "vite-plus", specifier: "vite-plus/oxlint-plugin" },
      { name: "anti-slop", specifier: "./tools/oxlint/anti-slop/index.ts" },
    ],
    overrides: [
      ...(cloudflare.overrides ?? []),
      // Astro defines `Astro` in component scripts, and `astro check` type-checks them.
      { files: ["**/*.astro"], globals: { Astro: "readonly" } },
    ],
    rules: {
      ...cloudflare.rules,
      // One-line guard clauses stay; a body that spans lines needs braces.
      curly: ["error", "multi-line"],
      // DOM scripts narrow elements with instanceof, and anti-slop already bans typeof checks.
      "@nkzw/no-instanceof": "off",
      // No React here. The rule flags every function named use*, such as Playwright's fixture `use`.
      "react/rules-of-hooks": "off",
      // @cloudflare/workers-types gives Element an HTMLRewriter append() that takes no nodes.
      "unicorn/prefer-dom-node-append": "off",
      // nkzw's copies of the anti-slop rules below.
      "quality/no-array-filter-map": "off",
      "quality/no-chained-type-assertions": "off",
      "quality/no-conditional-empty-object-spread": "off",
      "quality/no-known-value-widening": "off",
      "quality/no-object-parameters": "off",
      "quality/no-reduce-accumulator-copy": "off",
      "quality/no-reflect-apply": "off",
      "quality/no-reflect-get": "off",
      "quality/no-unknown-returns": "off",
      "quality/no-unknown-type-aliases": "off",
      "quality/no-unsafe-dictionary-type": "off",
      "quality/no-widen-then-assert": "off",
      // On before the preset through Oxlint's correctness category, which the preset turns off.
      "no-caller": "error",
      "no-iterator": "error",
      "no-unassigned-vars": "error",
      "oxc/bad-array-method-on-arguments": "error",
      "oxc/bad-match-all-arg": "error",
      "oxc/erasing-op": "error",
      "oxc/only-used-in-recursion": "error",
      "typescript/no-base-to-string": "error",
      "typescript/no-implied-eval": "error",
      "typescript/no-meaningless-void-operator": "error",
      "typescript/no-redundant-type-constituents": "error",
      "typescript/no-this-alias": "error",
      "typescript/no-useless-default-assignment": "error",
      "typescript/no-useless-empty-export": "error",
      "typescript/restrict-template-expressions": "error",
      "unicorn/no-await-in-promise-methods": "error",
      "unicorn/no-empty-file": "error",
      "unicorn/no-new-array": "error",
      "unicorn/no-single-promise-in-promise-methods": "error",
      "unicorn/no-thenable": "error",
      "unicorn/no-unnecessary-await": "error",
      "unicorn/no-useless-fallback-in-spread": "error",
      "unicorn/no-useless-length-check": "error",
      "unicorn/prefer-string-starts-ends-with": "error",
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
      // Temporary while migrating: the commit that enables each rule removes its line.
      "typescript/no-unsafe-assignment": "off",
      "typescript/no-unsafe-member-access": "off",
      "typescript/no-unsafe-type-assertion": "off",
    },
    options: { ...cloudflare.options, typeCheck: true },
  },
});
