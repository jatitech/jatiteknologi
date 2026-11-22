# Vitest

Vite+ 1.7 bundles Vitest 5.1. `pnpm test` (`vp test`) runs once and exits; it never watches unless you run `vp test watch`. The pre-commit hook runs it after `check:fix`, so a failing test blocks the commit. Run one project with `vp test --project <name>`, or one file with `vp test run <path>`.

## Projects

`vite.config.ts` defines three, which share the root `resolve.alias` (`@` → `src`) and `restoreMocks: true`:

| Project   | Files                      | Runs in                                            |
| --------- | -------------------------- | -------------------------------------------------- |
| `unit`    | `src/**/*.test.ts`         | Node                                               |
| `browser` | `src/**/*.browser.test.ts` | headless Chromium, through the Playwright provider |
| `types`   | `src/**/*.test-d.ts`       | `tsc` only; the files never execute                |

- Keep a test beside the module it covers.
- Import from `vite-plus/test` and `vite-plus/test/browser`, never `vitest` or `@vitest/*`. The lint rule `vite-plus/prefer-vite-plus-imports` enforces it. Globals are off, so every test imports what it uses.
- `@vitest/browser-playwright` must stay at the exact Vitest version `vite-plus` bundles (5.1.0 now). `playwright` matches `@playwright/test`; see `playwright.md`.

## What goes where

- Pure functions get a `unit` test. Markdown plugins are tested through the real pipeline: `createSatteriMarkdownProcessor({ ...satteriOptions, syntaxHighlight: false })`, rendering with a `fileURL` under `src/content/<collection>/<locale>/` to pick the locale.
- DOM scripts (the `mount*` functions) get a `browser` test against a fixture of the markup their component renders. Copy the data attributes and roles from the `.astro` file or the Markdown plugin output; layout CSS isn't loaded, so add inline styles when a test needs geometry (the carousel does).
- Type contracts (the content schema's output, route names, dictionary signatures) get a `types` test with `expectTypeOf` and `// @ts-expect-error`. They read the generated `.astro/` types, so a fresh clone needs `pnpm astro sync` first. `vp check` also type-checks these files, so a broken type test blocks the pre-commit hook.

## Browser mode

- No `vi.mock`: the anti-slop rules ban it. Use real inputs. A Blob URL stands in for a fetched file (revoke it to make `fetch` fail), and an unknown path on the test server returns an HTTP error. The provider's context has clipboard permission, so read the clipboard back with `navigator.clipboard.readText()`.
- `vi.spyOn` is allowed for forcing a rejection, such as `navigator.clipboard.writeText`. `restoreMocks` undoes it after each test. Fake timers are not restored by it: call `vi.useRealTimers()` in `afterEach`.
- Act through `page` locators and `userEvent`, and assert with `expect.element(...)`, which retries. Use `expect.poll` for values outside the DOM.
- Restore what a script changes outside its fixture. `mountFilterEntries` rewrites the runner's URL (restore `location.href` in `afterEach`), and `code-copy.ts` keeps one live region on `<body>` (swap only the fixture's container, never `document.body.innerHTML`).

## Review a test before keeping it

Based on https://vitest.dev/guide/learn/writing-tests-with-ai.

- Assert exact values or states, never `toBeDefined()` or "did not throw" alone. Asserting on a spy is fine only next to a check of what the user sees.
- Test behaviour, not internals: the test should survive a refactor that keeps the output.
- Cover the edges the code handles: empty lists, a missing body or attribute, a failed or non-OK `fetch`, input of only spaces, markup that's absent or incomplete.
- Name tests by behaviour in a few words ("returns undefined for unlocalized routes"), and use `it.for` with an `as const` table for cases that differ only in data.
- Run the test, then break the code it covers once and confirm it fails.
