# CLAUDE.md

Guidance for Claude Code (claude.ai/code) in this repo.

## Project Overview

Jati Technology company website -- an edge-native marketing and consulting platform built with Astro 5, deployed to Cloudflare Pages. Supports 15 locales via Paraglide JS (base locale: `en`).

## Commands

```bash
pnpm install              # Install dependencies
pnpm dev                  # Dev server at localhost:4321
pnpm build                # Compile paraglide messages + astro build
pnpm preview              # Build + wrangler dev (local CF Workers preview)
pnpm deploy               # Build + deploy to Cloudflare Workers
pnpm check                # Astro type checking
pnpm lint                 # oxlint --type-aware
pnpm lint:fix             # oxlint fix + oxfmt format
pnpm format               # oxfmt --write
pnpm format:check         # oxfmt --check
pnpm knip                 # Dead code / unused export detection
pnpm machine-translate    # Machine-translate i18n messages
pnpm cf-typegen           # Regenerate worker-configuration.d.ts from wrangler.jsonc
```

Tooling via `mise` (`.mise.toml`): Node 24.14.0, pnpm 10.28.2. Linting: **oxlint/oxfmt** (not ESLint/Prettier).

## Git Hooks (Lefthook)

- **pre-commit**: knip, `astro check` on .astro files, oxlint --fix on staged JS/TS/Astro, oxfmt --write on staged files
- **pre-push**: full build
- **commit-msg**: commitlint, conventional commits (`feat:`, `fix:`, `chore:`, etc.)

## CI/CD (GitHub Actions)

- **deploy-production.yml**: push to `main` → build + `wrangler pages deploy dist` (production)
- **deploy-preview.yml**: PR to `main` → build + `wrangler pages deploy dist --branch=pr-{number}` (preview URL)

## Architecture

### Rendering & Deployment

Astro 5 SSR hybrid with `@astrojs/cloudflare` v12 adapter. Build output goes to `dist/` (configured via `pages_build_output_dir` in `wrangler.jsonc`). Deployed as Cloudflare Pages (not Workers). CI deploys production on push to `main`; PRs get preview deployments. Cloudflare runtime types are declared in `worker-configuration.d.ts` (regenerate with `pnpm cf-typegen`).

### Internationalization

Paraglide JS, cookie + baseLocale strategy. Config: `project.inlang/settings.json`. Messages: `messages/{locale}.json` (15 locales). Auto-generated runtime: `src/paraglide/` -- **never edit directly**.

- Import messages: `import { m } from "@/paraglide/messages"`
- Import runtime: `import { baseLocale, isLocale } from "@/paraglide/runtime"`
- Locale helper: `src/lib/i18n.ts` (`getLocale`, `formatLangTag`)
- All user-facing text must use Paraglide -- no hardcoded strings

Pages under `src/pages/[lang]/` handle localized routes. Default locale (`en`) not prefix-routed (`prefixDefaultLocale: false`).

### Content

Blog posts use Astro Content Layer API (`src/content.config.ts`), glob loader from `src/content/blog/{locale}/`. Schema enforces `title`, `description`, `publishedAt`.

### Component Structure

- `src/layouts/Layout.astro` -- root HTML shell, theme init, SEO meta, ClientRouter (View Transitions)
- `src/components/Head.astro` -- meta tags, hreflang, canonical URL, OG/Twitter cards
- `src/components/ui/sections/` -- page-level composites (Hero, Header, Navigation)
- `src/components/ui/starwind/` -- Starwind UI components (managed via `pnpm dlx starwind@latest`, config in `starwind.config.json`)
- `src/components/ui/animations/` -- animation components (e.g., EncryptedText)

### Path Aliases

- `@/*` -> `./src/*`
- `@starwind/*` -> `./src/components/ui/starwind/*`

### Styling

Tailwind CSS v4 via Vite plugin. Two CSS entry points:

- `src/styles/starwind.css` -- Tailwind imports, theme tokens (light/dark), Starwind design system vars
- `src/styles/global.css` -- imports starwind.css, sets Geist Mono font, base styles, custom utilities

Dark mode: `.dark` class on `<html>`, toggled via localStorage. `cn()` utility (`src/lib/utils.ts`) merges Tailwind classes via clsx + tailwind-merge.

### Client-Side Libraries

GSAP 3 (scroll animations), Three.js (WebGL). Client `<script>` tags must clean up on teardown (`disconnectedCallback`) -- prevents memory leaks during View Transitions.

### Site Config & Navigation

- `src/configs/site.ts` -- site name, title, description
- `src/configs/nav.ts` -- nav tree with icons from `@tabler/icons`

### Domain Context

`/docs/` has company profile, brand voice. Consult before implementing domain-specific copy/features. Note: `docs/` gitignored (local reference only).

### Environment

Single env var: `PUBLIC_SITE_URL` (defaults to `http://localhost:4321`). Defined in Astro env schema and `.env.example`.

## Key Constraints

- Shell is **fish** -- avoid bash-specific syntax (`&&`, `||`, `export`) in terminal commands unless wrapped in `bash -lc`
- `src/paraglide/` and `worker-configuration.d.ts` generated -- no hand-edit
- Starwind UI components library-managed -- modify via starwind CLI, not by hand
- TypeScript strict mode; no implicit `any`
- `AGENTS.md` and `docs/` gitignored
