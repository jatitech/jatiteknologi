# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

The public marketing site of Jatiteknologi (PT Jati Teknologi Indonesia). Brand strategy and copy live in `BRAND.md`, the visual system in `DESIGN.md`, logo sources in `brand/logo/`. The tech stack is forked from heyris (`~/Workspaces/github.com/risqiromadhoni/heyris`): same tooling, CI and Cloudflare account, started from a blank page.

## Commands

- Run scripts with `pnpm dev` / `pnpm build` (or `vp run dev` / `vp run build`), never `vp dev` / `vp build`: those run plain Vite without the Astro and Void plugins.
- `vp check` formats, lints and type-checks; `vp check --fix` rewrites files. It skips `.astro` files, so match their existing style by hand (tabs).
- The pre-commit hook (`vp staged`) runs `vpr check:fix` over the whole project (`vp check --fix`, `astro check`, then `knip --fix`), then `vp test`. A lint, type or unused-code error, or a failing test, blocks the commit. The `staged` task is a function so lint-staged doesn't append file paths, which Knip and Vitest would misread. It checks the working tree, not the staged files, so a commit holding part of the changes passes only if the tree at that moment would pass on its own.
- `pnpm check` runs `vp check`, then `astro check` (types in `.astro` files, which `vp check` skips), then Knip (unused files, exports and dependencies). Knip, `vp lint` and `vp fmt` share the ignore list in `tools/ignore-patterns.ts`; add new agent-tooling folders there, not in one tool's config.
- `vp fmt` also skips `BRAND.md`, `DESIGN.md`, `brand/**`, `docs/**` and `specs/**` (`fmt.ignorePatterns` in `vite.config.ts`). They are hand-written; remove an entry only if you mean to reformat those files.
- Unused imports, variables and parameters are errors: oxlint's `no-unused-vars` in `.ts`, and `noUnusedLocals` / `noUnusedParameters` in `tsconfig.json` for `astro check`. Prefix a parameter that must stay with `_`.
- `typescript` is pinned to `^6` because `@astrojs/check` 0.9 accepts only TypeScript 5 or 6. Don't upgrade it to 7 until `@astrojs/check` supports it.
- `pnpm test` (`vp test`) runs Vitest once in three projects: `unit` (`src/**/*.test.ts`, Node), `browser` (`src/**/*.browser.test.ts`, headless Chromium) and `types` (`src/**/*.test-d.ts`, `tsc` only). Read `.claude/rules/vitest.md` before writing one.
- `vp check` and the `types` tests read the generated `.astro/` types, so a fresh clone needs `pnpm astro sync` first. CI runs it before both.
- End-to-end and accessibility tests are Playwright (`pnpm test:e2e`, Chromium, Firefox and WebKit); read `.claude/rules/playwright.md` before writing one.
- Lighthouse budgets (in `unlighthouse.config.ts`: 100 in all four categories): `VITE_APP_SITE=http://localhost:4321 pnpm build` (on the default workers.dev site `robots.txt` blocks every route, so Unlighthouse finds nothing to scan; the workflow sets it), `pnpm astro preview`, then `pnpm unlighthouse:ci`. Stop the preview with `pnpm astro preview stop`.
- Size budgets live in `.size-limit.json` and are measured with Brotli by `@size-limit/file`: `pnpm build`, then `pnpm size`. It covers the CSS in `dist/client/_astro/` only, because the site ships no external JS yet. When the first client script lands, add a JS check (size-limit fails on a path that matches no files, so don't add it before then).
- CI in `.github/workflows/` runs the check, test, Playwright, Unlighthouse and size workflows on pushes and pull requests to `main`, through `voidzero-dev/setup-vp`. Every action is pinned to a full commit SHA with its release in a trailing comment; Dependabot updates both. The five are also reusable (`workflow_call`), and the release workflow calls them. Their concurrency groups include the file stem (`${{ github.workflow }}-check-${{ github.ref }}`) because a called workflow sees the caller's `github.workflow`: without it, all five called from Release would cancel one another. Test, Playwright, Unlighthouse and Size run only when their `paths` list changes; when a new file starts to affect the site, tests or bundle, add it to the matching list.
- Dependabot (`.github/dependabot.yml`) opens weekly grouped PRs for npm and GitHub Actions. An astro upgrade PR still needs its exact versions updated by hand in `minimumReleaseAgeExclude` in `pnpm-workspace.yaml`. A vite-plus upgrade PR bumps only the `vite-plus` catalog entry, so set the `vite` alias beside it (`npm:@voidzero-dev/vite-plus-core@<same version>`) by hand and run `pnpm install`; a mismatch installs a second Vitest.
- Production deploys run only from `.github/workflows/release.yml`. release-please keeps a release PR open on `main`; merging it tags `vX.Y.Z`, calls the five gate workflows, and only if all pass runs `void:deploy` (`void deploy --platform cloudflare`) with the `CLOUDFLARE_API_TOKEN` secret and the `VITE_APP_SITE` repo variable. Actions → Release → Run workflow redeploys through the same gates. Don't edit `CHANGELOG.md` or the `version` in `package.json` by hand. `pnpm deploy` is a pnpm built-in, not the script.

## Conventions

- Conventional Commits (`type(scope): summary`). Branches are `<type>/<kebab-case-summary>`.
- Naming: camelCase for variables and functions, PascalCase for types, classes and components, UPPER_SNAKE_CASE for true constants.
- Comment only non-obvious intent; use TSDoc `/** */` on exported APIs. No commented-out code.
- oxlint enforces `max-lines: 200` per file, counting blank lines and comments. Split a file before it reaches that.
- Style with UnoCSS (`uno.config.ts`): `presetWind4` (Tailwind 4 compatible utilities and reset), `presetTypography`, `presetIcons` (`ph`, `lucide`, `simple-icons`), the MDC extractor and the variant group transformer. The theme is UnoCSS's default: no custom colours, fonts or shortcuts yet. When the `DESIGN.md` tokens move into code, put them in `theme` in `uno.config.ts` and use them by name, never raw hex values. Don't add `@unocss/reset` or another base preset.
- The vendored anti-slop rules (`tools/oxlint/anti-slop/`, provenance in its `UPSTREAM.md`) are on. Every non-const `as` needs a `// SAFETY: <invariant>` comment just above it. Parse at the boundary instead of using `unknown` or `object` parameters, returns or dictionaries, or ad hoc `typeof` checks. Fix findings; never disable a rule. Update the plugin through the `install-anti-slop` skill.

## Layout (Feature-Sliced Design)

- `src/pages/` holds thin Astro routes only. Each imports one page from `@/_pages/<slice>` and renders it inside `@/app/layouts/BaseLayout.astro`.
- `src/_pages/<slice>` is the FSD pages layer. Imports point down only: `_pages` imports `features` and `shared`, `features` imports `shared`, and `shared` imports neither. Nothing under `_pages`, `features` or `shared` imports `app`.
- Import a slice through its `index.ts`, not a deep path. `app/layouts` has no index.
- A component used by one page stays in that page's slice. Move it to `features/` or `shared/` once a second page uses it.
- `src/env.d.ts` declares `*.astro` modules so a slice's `index.ts` can re-export an `.astro` component.

## i18n

- Indonesian (`id`) is the default locale with no prefix; English lives under `/en` (`i18n` in `astro.config.mjs`, `LOCALES` in `src/shared/i18n/locale.ts`). Keep both lists in step.
- `src/shared/i18n/routes.ts` is the only file that builds paths. Add a route to `ROUTES`, give it a localized segment when the two languages differ, and build links with `localizedPath()`.
- UI strings live in `src/shared/i18n/id.ts` and `en.ts`. `en.ts` is typed as `Dictionary` (`typeof id`), so a missing or extra key fails the type check.
- Each page passes `path` and `alternates` to `BaseLayout`, which writes the canonical, `hreflang` and `x-default` links. The sitemap writes its own alternates from the same locales.
- Copy is written in English first, then into plain Indonesian with the `bahasa-indonesia-plain` skill (`BRAND.md`, "Voice").
- Platform pages: one `PlatformCopy` per page in `src/shared/i18n/platform/{id,en}/<slug>.ts`, registered in each locale's `index.ts`. A new page needs its slug in `PLATFORM_SLUGS` and `ROUTES` (`routes.ts`), the two route files in `src/pages/integrasi/` and `src/pages/en/integrations/`, and a row in `docs/platform-pages.md`. Every figure needs a card `source` whose label carries a date; `content.test.ts` enforces it.
- Platform pages are called integrations: `/integrasi/<slug>` and `/en/integrations/<slug>`. Each hero panel (`PlatformHero.astro`) carries the platform's brand colour and logo as literal classes, because UnoCSS reads only literal class names and the CSP blocks `style=""`. Use an explicit opacity (`bg-[#0089FF]/100`) on a custom colour: without one, UnoCSS emits `color-mix(... var(--un-bg-opacity) ...)` and WebKit paints nothing. The logos are Simple Icons marks (`i-simple-icons-*`) on the home tiles and the hero panels.
- The founder portrait is `src/assets/founder.webp`, cropped from the studio photo to 5:6 (800 × 960) without its baked-in caption.
- `design/tokens.penpot.json` is a verified Penpot export; `src/shared/design/tokens.test.ts` fails when the code drifts from it. `docs/penpot/*.md` are read-only specs exported from Penpot: regenerate them from the file, don't hand-edit.
- The site is light only: `color-scheme: light` on `:root`, one `theme-color` meta, one logo. Penpot's `modes/dark` tokens stay in `design/tokens.penpot.json` but are not shipped, and `DESIGN.md`'s dark-mode and toggle sections are parked. To add a dark theme later, restore a `DARK_MODE` palette, an `@media (prefers-color-scheme: dark)` block in `designPreflight`, the white logo and a second `theme-color`, and test both schemes with axe.
- `public/site.webmanifest` hard-codes the theme colour (`#FAF8F4`). The layout's `theme-color` meta tag comes from `color.neutral` in `src/shared/design/palette.ts`, and `e2e/home-page/links-the-web-app-manifest-and-its-icons.spec.ts` pins both to that value. Change the palette, the manifest and the spec together.

## Gotchas

- `site` comes from `VITE_APP_SITE` (declared in `env.ts`, default `https://jatiteknologi.risqi-romadhoni96.workers.dev`). Set it in the build shell, for example `VITE_APP_SITE=https://<domain> pnpm void:deploy`; CI reads the `VITE_APP_SITE` repo variable. `.env` never reaches it: Void builds ignore `.env`, and `astro.config.mjs` reads only `process.env`. Read it in code as `Astro.site` or `context.site`, never as `env.VITE_APP_SITE` from `void/env`, which throws outside a Worker request.
- Cloudflare settings live in `void.config.ts`: Worker `jatiteknologi` on the same account as heyris. There is no custom domain yet. To add one, add `routes: [{ pattern: "<domain>", custom_domain: true }]` and keep `workers_dev` and `preview_urls` on, because Void verifies each deploy through a workers.dev preview URL. The first local deploy may need `pnpm void connect --platform cloudflare`, which writes `.void/project.json` and creates `void.lock.json` (commit the lock).
- `tsconfig.json` lists `.astro/types.d.ts` in `files` so it loads before Void's `.void/*.d.ts`; otherwise Cloudflare's global `ImageMetadata` wins and every image import fails `astro check`. Keep `.void/*.d.ts` in `include`, because a `files` list replaces the one inherited from `.void/tsconfig.json`.
- `astro.config.mjs` uses `output: "server"` because Void's deploy needs Astro's Worker entry. Pages render on request unless they `export const prerender = true`. Don't switch to `output: "static"`. A page that uses `void/db`, `void/kv`, `void/storage`, `void/ai` or `env` from `cloudflare:workers` must not prerender.
- Keep `build.format: "file"` with `trailingSlash: "never"`. Cloudflare redirects `/x` to `/x/` for directory output.
- pnpm 12 installs before `pnpm exec` or `pnpm run` whenever `package.json` differs from `node_modules`, and blocks install scripts: a new dependency that needs one goes in `allowBuilds` in `pnpm-workspace.yaml`. Upgrading `astro` also means updating the exact versions in `minimumReleaseAgeExclude`.
- When Astro detects an agent on macOS or Linux, `astro dev` and `astro preview` run in the background, so the command returns at once. Pass `--ignore-lock` to keep either in the foreground, as Playwright's `webServer` and CI do.
- Void's dev server writes `src/middleware.ts` and deletes it when it stops cleanly. The file's `.gitignore` line is committed on purpose. A killed server leaves the file behind; delete it before `pnpm build` or `pnpm void:deploy`. Write your own middleware in `src/middleware/index.ts`.
- UnoCSS reads class names from `.astro` files and from `content.filesystem` in `uno.config.ts` (`src/**/*.{md,mdc,markdown}`). A class used in any other `.ts` file is not generated.
- `public/favicon.svg` is a copy of `brand/logo/jatiteknologi-symbol.svg`. Without an icon link, Chrome requests `/favicon.ico`, and the 404 fails the Lighthouse best-practices budget.
- Playwright's Firefox fails to launch on this Mac ("Could not find profile folder"), in heyris too. Run `pnpm test:e2e --project=chromium --project=webkit` locally; CI on Ubuntu runs all three.
- Security headers come from `src/shared/security/headers.ts`, the one source for `public/_headers`, the middleware (`src/middleware/index.ts`, on-demand responses) and `security.csp.directives`. A unit test fails when `_headers` drifts; copy the expected text from its diff. Prerendered pages and assets get headers only from `_headers`, which Workers never see.
- Prerendered pages carry the CSP in a `<meta>` with hashes for Astro's own `<style>` and `<script>`. Inline `style=""` attributes and `on*` handlers are blocked, so use classes and Astro `<script>` tags. Dev runs without the CSP.
- `frame-ancestors` is header-only, because browsers ignore it in a `<meta>`. Keep `Cache-Control` out of `_headers`' `/*` rule, or the adapter drops its immutable `/_astro/*` rule.
- HSTS has no `preload`: removing a domain from the preload list takes months, and the production domain is not final. Add it only once the domain is fixed.
- Under `astro preview`, WebKit upgrades a plain-HTTP localhost page's subresources to HTTPS (`upgrade-insecure-requests`), so its stylesheet never loads. A spec that needs styles runs on the dev server (no `PREVIEW_URL`), as `paints-the-hero-panel-in-the-platform-brand-colour.spec.ts` does.
- `pnpm test:e2e` builds first, and `e2e/security/` runs against `astro preview` on port 4322, the only server that applies `_headers`. `public/.well-known/security.txt` expires on 2027-11-17; renew it before then.
