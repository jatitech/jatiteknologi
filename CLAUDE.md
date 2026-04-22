# CLAUDE.md

File guide Claude Code (claude.ai/code) for work in repo.

## Business context

**PT. Jati Teknologi Indonesia** — AI-native, edge-first engineering partner, Tangerang, Indonesia. Positioning: **Platform Independence Partner** — help Indonesian business own digital infrastructure instead rent forever from marketplace + SaaS vendor.

|         |                                                |
| ------- | ---------------------------------------------- |
| NIB     | 0410230086416                                  |
| NPWP    | 50.559.343.4-451.000                           |
| Founded | 2023                                           |
| Contact | hello@jatiteknologi.com · +62 896-9220-9988    |
| Founder | Risqi Romadhoni — Founder & Principal Engineer |

**Service map** (8 categories, tied to KBLI license — some pending Sertifikat Standar via oss.go.id):

- **Platform Independence**: `marketplace-exit` (D2C storefront, KBLI 62012), `enterprise-open-source` (Frappe ecosystem, 62019)
- **Engineering**: `custom-software` (62019), `strategic-engineering` (SaaS/modernization, 62019), `iot-consulting` (62024 + 43213 ⚠)
- **Security & Advisory**: `security-compliance` (62021 + 62022 ⚠), `virtual-cto` (62029 ⚠)
- **Infrastructure**: `server-maintenance` (VPS management, 62090)

⚠ KBLI 62021, 62022, 43213, 62029 need Sertifikat Standar before commercial op.

### Deep context — `memory/` files

Load on demand for copywriting, positioning, service-page work:

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

- **Astro 5** (SSR via `@astrojs/cloudflare` adapter) — do **not** upgrade Astro 6; project rolled back to 5 for Cloudflare Pages compat (see commit `17a6c73`).
- **Cloudflare Pages** deploy (`pages deploy dist`), not Workers. `wrangler.jsonc` declares `pages_build_output_dir: ./dist`.
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

`pnpm build` always run `paraglide-js compile` first — writes to `src/paraglide/` = generated output, never edit by hand.

## Git hooks (lefthook)

- **pre-commit**: `knip`, `astro check` (on staged `*.astro`), `oxlint --fix`, `oxfmt --write` — fixes auto-staged.
- **pre-push**: `pnpm build` (catch build break before push).
- **commit-msg**: `commitlint` with `@commitlint/config-conventional` — commits **must** follow Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, …).

## Architecture

### Routing & i18n

- `src/pages/index.astro` serves **base locale** (`en`) at `/`.
- `src/pages/[lang]/index.astro` serves all non-base locales via `getStaticPaths()` that filter out `baseLocale`. Add new page → mirror in both.
- `astro.config.mjs` reads locale list from `project.inlang/settings.json` so inlang = single source of truth for supported languages.
- `prefixDefaultLocale: false` — English URLs never carry `/en/`.
- User-facing strings go in `messages/{locale}.json`; import via `@/paraglide/messages`. Run `pnpm machine-translate` after edit `en.json` to propagate.
- `src/lib/i18n.ts` has `getLocale()`, `formatLangTag()`, `getLangIcon()` helpers. Arabic get `dir="rtl"` auto in `Layout.astro`.

### Navigation

`src/configs/nav.ts` = **single source of truth** for primary nav. Mega menu (`src/components/ui/sections/Navigation.astro`) and any footer/sitemap consumers read from `getNavigation()`. Icons = Tabler SVGs imported as Astro `SvgComponent`s.

### Content collections

`src/content.config.ts` defines `blog` collection loaded via `glob` from `src/content/blog/{locale}/*.md`. Blog routes (`src/pages/blogs/[...slug].astro` and `src/pages/[lang]/blogs/[...slug].astro`) filter entries by locale prefix in entry `id`.

### Path aliases (`tsconfig.json`)

- `@/*` → `src/*`
- `@starwind/*` → `src/components/ui/starwind/*`

### Cloudflare types

`worker-configuration.d.ts` generated by `wrangler types`, `gitignored`-ish (committed but ignored by oxlint + knip). Regenerate with `pnpm cf-typegen` after change `wrangler.jsonc` bindings.

## Deployment

- **Production**: push to `main` → `.github/workflows/deploy-production.yml` → `wrangler pages deploy dist`. `PUBLIC_SITE_URL` set from repo var `DOMAIN`.
- **Preview**: PR to `main` → `.github/workflows/deploy-preview.yml` → deploys to branch `pr-<number>` on `CF_PAGES_DOMAIN`.
- Required secrets: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`. Required vars: `DOMAIN`, `CF_PAGES_DOMAIN`.

## Non-code assets

- `docs/company/` and `docs/legals/` hold brand voice, company profile, Indonesian legal docs (NIB, NPWP, certificates). Inform copywriting — not source code.
- `jatiteknologi.pen` = Pencil design file (binary/encrypted); only edit via `pencil` MCP tools, never `Read`/`Edit`.

## Conventions

- Use Starwind primitives from `@starwind/*` before hand-roll UI. Starwind components tracked in `starwind.config.json`, ignored by knip.
- GSAP = animation library (`gsap` import). Respect `prefers-reduced-motion` — see `Navigation.astro` for pattern.
- Keep `src/paraglide/` out of edits + out of knip/lint scope (already ignored).

<!-- code-review-graph MCP tools -->

## MCP Tools: code-review-graph

**IMPORTANT: This project has a knowledge graph. ALWAYS use the
code-review-graph MCP tools BEFORE using Grep/Glob/Read to explore
the codebase.** The graph is faster, cheaper (fewer tokens), and gives
you structural context (callers, dependents, test coverage) that file
scanning cannot.

### When to use graph tools FIRST

- **Exploring code**: `semantic_search_nodes` or `query_graph` instead of Grep
- **Understanding impact**: `get_impact_radius` instead of manually tracing imports
- **Code review**: `detect_changes` + `get_review_context` instead of reading entire files
- **Finding relationships**: `query_graph` with callers_of/callees_of/imports_of/tests_for
- **Architecture questions**: `get_architecture_overview` + `list_communities`

Fall back to Grep/Glob/Read **only** when the graph doesn't cover what you need.

### Key Tools

| Tool                        | Use when                                               |
| --------------------------- | ------------------------------------------------------ |
| `detect_changes`            | Reviewing code changes — gives risk-scored analysis    |
| `get_review_context`        | Need source snippets for review — token-efficient      |
| `get_impact_radius`         | Understanding blast radius of a change                 |
| `get_affected_flows`        | Finding which execution paths are impacted             |
| `query_graph`               | Tracing callers, callees, imports, tests, dependencies |
| `semantic_search_nodes`     | Finding functions/classes by name or keyword           |
| `get_architecture_overview` | Understanding high-level codebase structure            |
| `refactor_tool`             | Planning renames, finding dead code                    |

### Workflow

1. The graph auto-updates on file changes (via hooks).
2. Use `detect_changes` for code review.
3. Use `get_affected_flows` to understand impact.
4. Use `query_graph` pattern="tests_for" to check coverage.
