# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Jati Technology company website -- an edge-native marketing and consulting platform built with Astro 6, deployed to Cloudflare Workers. Supports 15 locales via Paraglide JS (base locale: `en`).

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

Tooling is managed via `mise` (`.mise.toml`): Node 24.14.0, pnpm 10.28.2. Linting uses **oxlint/oxfmt** (not ESLint/Prettier).

## Git Hooks (Lefthook)

- **pre-commit**: knip, `astro check` on .astro files, oxlint --fix on staged JS/TS/Astro, oxfmt --write on staged files
- **pre-push**: full build
- **commit-msg**: commitlint with conventional commits (`feat:`, `fix:`, `chore:`, etc.)

## Architecture

### Rendering & Deployment

Astro 6 SSR hybrid with `@astrojs/cloudflare` v13 adapter (uses Cloudflare Vite plugin + workerd runtime). Build output: `dist/server/` (Worker entry) + `dist/client/` (static assets). Deployed as Cloudflare Workers (not Pages). Wrangler config in `wrangler.jsonc`. Cloudflare runtime types are declared in `worker-configuration.d.ts` (regenerate with `pnpm cf-typegen`).

### Internationalization

Paraglide JS with cookie + baseLocale strategy. Config lives in `project.inlang/settings.json`. Translation messages are in `messages/{locale}.json` (15 locales). Auto-generated runtime is in `src/paraglide/` -- **never edit these files directly**.

- Import messages: `import { m } from "@/paraglide/messages"`
- Import runtime: `import { baseLocale, isLocale } from "@/paraglide/runtime"`
- Locale helper: `src/lib/i18n.ts` (`getLocale`, `formatLangTag`)
- All user-facing text must use Paraglide -- no hardcoded strings

Pages under `src/pages/[lang]/` handle localized routes. Default locale (`en`) is not prefix-routed (`prefixDefaultLocale: false`).

### Content

Blog posts use Astro Content Layer API (`src/content.config.ts`) with a glob loader reading from `src/content/blog/{locale}/`. Schema enforces `title`, `description`, `publishedAt`.

### Component Structure

- `src/layouts/Layout.astro` -- root HTML shell with theme init, SEO meta, ClientRouter (View Transitions)
- `src/components/Head.astro` -- meta tags, hreflang, canonical URL, OG/Twitter cards
- `src/components/ui/sections/` -- page-level composites (Hero, Header, Navigation)
- `src/components/ui/starwind/` -- Starwind UI library components (managed via `pnpm dlx starwind@latest`, config in `starwind.config.json`)
- `src/components/ui/animations/` -- animation components (e.g., EncryptedText)

### Path Aliases

- `@/*` -> `./src/*`
- `@starwind/*` -> `./src/components/ui/starwind/*`

### Styling

Tailwind CSS v4 via Vite plugin. Two CSS entry points:

- `src/styles/starwind.css` -- Tailwind imports, theme tokens (light/dark), Starwind design system variables
- `src/styles/global.css` -- imports starwind.css, sets Geist Mono font, base styles, custom utilities

Dark mode uses `.dark` class on `<html>`, toggled via localStorage. The `cn()` utility (`src/lib/utils.ts`) merges Tailwind classes via clsx + tailwind-merge.

### Client-Side Libraries

GSAP 3 (scroll animations) and Three.js (WebGL). Client `<script>` tags using these must clean up on teardown (`disconnectedCallback`) to prevent memory leaks during View Transitions.

### Site Config & Navigation

- `src/configs/site.ts` -- site name, title, description
- `src/configs/nav.ts` -- full navigation tree with icons from `@tabler/icons`

### Domain Context

`/docs/` contains company profile, brand voice, and content pillars. Consult these before implementing domain-specific copy or features. Note: `docs/` is gitignored (local reference only).

### Environment

Single env var: `PUBLIC_SITE_URL` (defaults to `http://localhost:4321`). Defined in Astro env schema and `.env.example`.

## Key Constraints

- Shell is **fish** -- avoid bash-specific syntax (`&&`, `||`, `export`) in terminal commands unless wrapped in `bash -lc`
- `src/paraglide/` and `worker-configuration.d.ts` are generated -- do not hand-edit
- Starwind UI components are library-managed -- modify via the starwind CLI, not by hand
- TypeScript strict mode; no implicit `any`
- `AGENTS.md` and `docs/` are gitignored
