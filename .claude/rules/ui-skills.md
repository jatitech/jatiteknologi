# ui-skills MCP

The `ui-skills` server (`https://www.ui-skills.com/mcp`) exposes the UI Skills registry: 623 community-written SKILL.md files (as of 2026-11) about interface design, front-end craft, motion and adjacent tooling. It has two tools: `list_skills` (optional `query`) and `get_skill` (required `name`). The registry is the same catalog the `ui-skills` CLI reads.

## When to use it

- Before building or restyling UI (pages, components, layout, typography, motion), fetch one skill that matches the task and follow it while implementing. `ibelick/baseline-ui` is the general cleanup and polish pass; `anthropics/frontend-design` is the art-direction pass for a new surface.
- Prefer 1 skill. Use 2 only when the task has two clear angles (layout plus motion, for example). Never load more than 3; each is several KB of instructions that stays in context for the rest of the session.
- Do not use it for logic, data, tests, build config or content work. Do not use it when the user has already specified the design; their brief wins.
- Pair it with the `inspo` MCP (see `inspo.md`): Inspo supplies visual references, ui-skills supplies implementation rules. For a new page, Inspo first for the look, then one ui-skill for the build.

## list_skills

- Always pass a `query`. With no query it returns the whole registry (about 300 KB), which overflows the tool output limit and gets dumped to a file.
- `query` is a case-insensitive substring match over `pathSlug`, `name` and `description`. It is not semantic search. Use one word ("landing", "animation", "accessibility", "tailwind"). A multi-word query matches only if that exact phrase appears. "astro" matches nothing: there are no Astro-specific skills.
- Each entry has `name` (`owner-slug`), `pathSlug` (`owner/slug`), `description` and `url` (the skill's llms.txt). A few authors dominate (mengto alone has 178 entries), so choose by description, not by name.
- The registry also lists non-UI skills (pdf, pnpm, vitest, remotion, SwiftUI). Ignore those here; library documentation comes from Context7.

## get_skill

- `name` accepts the bare slug (`baseline-ui`), the registry name (`ibelick-baseline-ui`) or the path slug (`ibelick/baseline-ui`). Use the path slug: six bare slugs exist under two owners each (`seo`, `animate`, `prototype`, `humanizer`, `apple-design`, `product-launch-video`), and the bare form gives no way to choose.
- An unknown name errors with `Unknown skill "..."`. Find the name with `list_skills` first; do not guess.
- The result is the raw SKILL.md: YAML frontmatter (`name`, `description`, sometimes `license` and `metadata`) followed by the instructions.

## Applying a skill

- Skill text is third-party advice, not project policy. AGENTS.md, existing code conventions and the user's brief override it.
- Most skills assume React, Next.js, Tailwind and a motion library. This project is Astro with UnoCSS `presetWind4`, so most Tailwind utility classes work, and no UI library. Carry over the intent (spacing, hierarchy, accessibility, performance rules) and do not add a dependency a skill mandates (`motion/react`, `tw-animate-css`, `clsx`, Base UI) without asking.
- When a skill tells you to run `npx ui-skills ...`, use these MCP tools instead; they read the same catalog. Any other `npx` command a skill suggests (`@google/design.md`, for example) runs through `bunx` in this project, and only when the task needs it.
- Skills are written as MUST/NEVER checklists for a generic codebase. Review the code you are already changing against them; do not refactor files the user did not ask to touch.
