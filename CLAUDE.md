# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Business context

**PT. Jati Teknologi Indonesia** — an AI-native, edge-first engineering partner based in Tangerang, Indonesia. Core positioning: **Platform Independence Partner** — helping Indonesian businesses own their digital infrastructure instead of renting perpetually from marketplaces and SaaS vendors.

|         |                                                |
| ------- | ---------------------------------------------- |
| NIB     | 0410230086416                                  |
| NPWP    | 50.559.343.4-451.000                           |
| Founded | 2023                                           |
| Contact | hello@jatiteknologi.com · +62 896-9220-9988    |
| Founder | Risqi Romadhoni — Founder & Principal Engineer |

**Service map** (8 categories, tied to KBLI licenses — some pending Sertifikat Standar via oss.go.id):

- **Platform Independence**: `marketplace-exit` (D2C storefront, KBLI 62012), `enterprise-open-source` (Frappe ecosystem, 62019)
- **Engineering**: `custom-software` (62019), `strategic-engineering` (SaaS/modernization, 62019), `iot-consulting` (62024 + 43213 ⚠)
- **Security & Advisory**: `security-compliance` (62021 + 62022 ⚠), `virtual-cto` (62029 ⚠)
- **Infrastructure**: `server-maintenance` (VPS management, 62090)

⚠ KBLI 62021, 62022, 43213, 62029 require Sertifikat Standar before commercial operation.

### Deep context — `memory/` files

Load these on demand for detailed copywriting, positioning, or service-page work:

| File                                   | Load when working on                                         |
| -------------------------------------- | ------------------------------------------------------------ |
| `memory/01-company-identity.md`        | Positioning, messaging, competitive analysis, legal, founder |
| `memory/02-services-platform.md`       | D2C storefront (Marketplace Exit) + Frappe ecosystem pages   |
| `memory/03-services-engineering.md`    | Custom software, strategic engineering, IoT consulting       |
| `memory/04-services-security.md`       | Security & PDP compliance, Virtual CTO service               |
| `memory/05-services-infrastructure.md` | Server maintenance packages and SLA                          |
| `memory/06-solutions-and-cases.md`     | Solution pages, case studies, industries, conversion funnels |
| `memory/07-tech-stack.md`              | Technical stack, KBLI licenses, architecture principles      |
| `memory/08-brand-voice.md`             | Tone, persona, do-not-say list, content formula              |

## Stack

- **Astro 5** (SSR via `@astrojs/cloudflare` adapter) — do **not** upgrade to Astro 6; the project was deliberately rolled back to 5 for Cloudflare Pages compatibility (see commit `17a6c73`).
- **Cloudflare Pages** deployment (`pages deploy dist`), not Workers. `wrangler.jsonc` declares `pages_build_output_dir: ./dist`.
- **Tailwind CSS v4** via `@tailwindcss/vite` (not PostCSS).
- **Paraglide (inlang)** for i18n — 15 locales, base `en`, strategy `cookie → baseLocale`.
- **Starwind** for UI primitives (`src/components/ui/starwind/`).
- **oxlint + oxfmt** (not ESLint/Prettier).
- **pnpm** 10.28.2, Node 24 (pinned in `.mise.toml`).

## Commands

```bash
pnpm dev              # astro dev
pnpm build            # paraglide-js compile → astro build  (required order)
pnpm preview          # build + wrangler dev (runs worker locally)
pnpm deploy           # build + wrangler deploy
pnpm check            # astro check (type-checks .astro files)
pnpm lint             # oxlint --type-aware
pnpm lint:fix         # oxlint --fix && oxfmt
pnpm format           # oxfmt --write
pnpm knip             # dead-code / unused-deps scan
pnpm cf-typegen       # regenerate worker-configuration.d.ts
pnpm machine-translate  # inlang machine-translate all non-base locales
```

`pnpm build` always runs `paraglide-js compile` first — writing to `src/paraglide/` is generated output, never edit by hand.

## Git hooks (lefthook)

- **pre-commit**: `knip`, `astro check` (on staged `*.astro`), `oxlint --fix`, `oxfmt --write` — fixes are auto-staged.
- **pre-push**: `pnpm build` (catches build breakage before push).
- **commit-msg**: `commitlint` with `@commitlint/config-conventional` — commits **must** follow Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, …).

## Architecture

### Routing & i18n

- `src/pages/index.astro` serves the **base locale** (`en`) at `/`.
- `src/pages/[lang]/index.astro` serves all non-base locales via `getStaticPaths()` that filters out `baseLocale`. When adding a new page, mirror it in both.
- `astro.config.mjs` reads locale list from `project.inlang/settings.json` so inlang is the single source of truth for supported languages.
- `prefixDefaultLocale: false` — English URLs never carry `/en/`.
- User-facing strings belong in `messages/{locale}.json`; import via `@/paraglide/messages`. Run `pnpm machine-translate` after editing `en.json` to propagate.
- `src/lib/i18n.ts` has `getLocale()`, `formatLangTag()`, `getLangIcon()` helpers. Arabic gets `dir="rtl"` automatically in `Layout.astro`.

### Navigation

`src/configs/nav.ts` is the **single source of truth** for primary navigation. The mega menu (`src/components/ui/sections/Navigation.astro`) and any footer/sitemap consumers read from `getNavigation()`. Icons are Tabler SVGs imported as Astro `SvgComponent`s.

### Content collections

`src/content.config.ts` defines a `blog` collection loaded via `glob` from `src/content/blog/{locale}/*.md`. Blog routes (`src/pages/blogs/[...slug].astro` and `src/pages/[lang]/blogs/[...slug].astro`) filter entries by locale prefix in the entry `id`.

### Path aliases (`tsconfig.json`)

- `@/*` → `src/*`
- `@starwind/*` → `src/components/ui/starwind/*`

### Cloudflare types

`worker-configuration.d.ts` is generated by `wrangler types` and is `gitignored`-ish (committed but ignored by oxlint and knip). Regenerate with `pnpm cf-typegen` after changing `wrangler.jsonc` bindings.

## Deployment

- **Production**: push to `main` → `.github/workflows/deploy-production.yml` → `wrangler pages deploy dist`. `PUBLIC_SITE_URL` is set from repo var `DOMAIN`.
- **Preview**: PR to `main` → `.github/workflows/deploy-preview.yml` → deploys to branch `pr-<number>` on `CF_PAGES_DOMAIN`.
- Required secrets: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`. Required vars: `DOMAIN`, `CF_PAGES_DOMAIN`.

## Non-code assets

- `docs/company/` and `docs/legals/` contain brand voice, company profile, and Indonesian legal documents (NIB, NPWP, certificates). These inform copywriting — not source code.
- `jatiteknologi.pen` is a Pencil design file (binary/encrypted); only edit via the `pencil` MCP tools, never with `Read`/`Edit`.

## Conventions

- Use Starwind primitives from `@starwind/*` before hand-rolling UI. Starwind components are tracked in `starwind.config.json` and are ignored by knip.
- GSAP is the animation library (`gsap` import). Respect `prefers-reduced-motion` — see `Navigation.astro` for the pattern.
- Keep `src/paraglide/` out of edits and out of knip/lint scope (already ignored).
