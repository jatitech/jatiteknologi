# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing site / company profile for **Jati Technology** — an AI-native, edge-first engineering company. Astro 5 SSG rendered on Cloudflare Pages, 15-locale i18n via Paraglide, GSAP + Three.js hero animation.

## Commands

Package manager is **pnpm 10**. Node 24 in CI.

| Command                             | Purpose                                                                                                                |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `pnpm dev`                          | Astro dev server at `localhost:4321`                                                                                   |
| `pnpm build`                        | Compiles Paraglide messages **then** runs `astro build`. Never run `astro build` alone — `src/paraglide/` won't exist. |
| `pnpm preview`                      | Builds + runs `wrangler dev` (emulates Cloudflare Pages locally)                                                       |
| `pnpm deploy`                       | Builds + `wrangler deploy`. CI handles this; rarely run locally.                                                       |
| `pnpm check`                        | `astro check` — type-checks `.astro` files                                                                             |
| `pnpm lint` / `pnpm lint:fix`       | **oxlint** with `--type-aware` (not ESLint)                                                                            |
| `pnpm format` / `pnpm format:check` | **oxfmt** (not Prettier). Sorts Tailwind classes in `clsx`/`cn`/`tw`/`tv`.                                             |
| `pnpm knip`                         | Dead-code / unused-dependency check                                                                                    |
| `pnpm machine-translate`            | `inlang machine translate` — fills missing locale messages                                                             |
| `pnpm cf-typegen`                   | Regenerate `worker-configuration.d.ts` from `wrangler.jsonc` bindings                                                  |

**Lefthook runs automatically**: pre-commit does knip + `astro check` + oxlint-fix + oxfmt on staged files; pre-push runs the full `pnpm build`; commit-msg enforces Conventional Commits via commitlint. Don't bypass with `--no-verify`.

## Architecture

### i18n (read this first)

- `project.inlang/settings.json` defines 15 locales with `en` as `baseLocale`. Messages live in `messages/{locale}.json`.
- `pnpm build` runs `paraglide-js compile` which generates `src/paraglide/` (`runtime.ts`, `messages.js`). **Never edit those files — they're regenerated every build and ignored by knip/lint.**
- Astro i18n uses `prefixDefaultLocale: false`: English is at `/`, others at `/{lang}/`. This is why there are two parallel page trees:
  - `src/pages/index.astro`, `src/pages/blogs/[...slug].astro` — base locale only
  - `src/pages/[lang]/index.astro`, `src/pages/[lang]/blogs/[...slug].astro` — all other locales (filtered via `locales.filter(l => l !== baseLocale)` in `getStaticPaths`)
- Paraglide strategy is `["cookie", "baseLocale"]` — locale persists via cookie.
- In components, call messages as `m.hero_title(undefined, { locale })` and resolve locale via `getLocale(Astro.currentLocale)` from [src/lib/i18n.ts](src/lib/i18n.ts).
- Blog `content.id` is `{locale}/{slug}` — filter by `id.startsWith(baseLocale)` or `id.split("/").at(0) === baseLocale` to split per-locale routes.
- SEO hreflang links are emitted for every locale in [src/components/Head.astro](src/components/Head.astro).

### Path aliases (tsconfig.json)

- `@/*` → `src/*`
- `@starwind/*` → `src/components/ui/starwind/*` — always import Starwind components via this alias, not a relative path.

### UI components

- [starwind.config.json](starwind.config.json) tracks installed Starwind components (base color `zinc`, CSS variables in [src/styles/starwind.css](src/styles/starwind.css)). To add a component, use the Starwind CLI — don't hand-write it under `src/components/ui/starwind/`.
- `src/components/ui/sections/` — page sections (`Header`, `Hero`, `Navigation`).
- Use `cn()` from [src/lib/utils.ts](src/lib/utils.ts) (clsx + tailwind-merge) for conditional classes. oxfmt sorts Tailwind classes inside `cn`/`clsx`/`tw`/`tv` calls.
- Theme toggle is client-side; the dark/light class is bootstrapped inline in `Head.astro`'s `initTheme()` before paint to avoid FOUC, and re-run on `astro:after-swap` for View Transitions.

### Hero animation

[src/components/ui/sections/Hero.astro](src/components/ui/sections/Hero.astro) contains a large inline `<script>` with GLSL shaders and a `HeroSection` custom element (Three.js points + GSAP ScrollTrigger). It disposes WebGL resources in `disconnectedCallback` — preserve this when editing, or View Transitions will leak contexts.

### Navigation data

[src/configs/nav.ts](src/configs/nav.ts) is the single source of truth for the site's IA. Each top-level entry has an `order` and optional `children` groups with their own `order`. `getNavigation()` sorts by `order` — preserve this pattern when adding entries.

### Deployment

- Adapter: `@astrojs/cloudflare` with `platformProxy.enabled` (exposes Cloudflare bindings to `Astro.locals` via `Runtime<Env>` — see [src/env.d.ts](src/env.d.ts)).
- [wrangler.jsonc](wrangler.jsonc): `pages_build_output_dir: "./dist"`, `nodejs_compat` flag, smart placement enabled. Env vars belong in `wrangler.jsonc` or CF secrets, not `.env`.
- `.github/workflows/deploy-preview.yml` deploys PRs to `pr-<num>.{CF_PAGES_DOMAIN}`. `deploy-production.yml` deploys `main` to production. Both set `PUBLIC_SITE_URL` at build time — the Astro `site` field reads it.
- `worker-configuration.d.ts` is auto-generated by `pnpm cf-typegen`; it's huge and excluded from lint/format.

### Env

Only `PUBLIC_SITE_URL` is declared via Astro's `envField` (public, server, defaults to `http://localhost:4321`). Add new public vars to both the schema in [astro.config.mjs](astro.config.mjs) and `ImportMetaEnv` in [src/env.d.ts](src/env.d.ts).

## Conventions

- **Commits**: Conventional Commits enforced by commitlint. Use `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`.
- **Formatting**: oxfmt with 2-space indent, 80-char width. Don't introduce Prettier config.
- **Linting**: oxlint categories `correctness`, `perf`, `suspicious` are all errors. Plugins: `unicorn`, `typescript`, `oxc`.
- **TypeScript**: strict (`astro/tsconfigs/strict`). Types auto-include `worker-configuration.d.ts` + `node`.
- **Unused code**: knip runs in pre-commit. If adding a dep/binary that knip doesn't auto-detect, add it to `ignoreDependencies`/`ignoreBinaries` in [knip.json](knip.json).
