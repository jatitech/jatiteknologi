# astro-docs MCP

The `astro-docs` server (`https://mcp.docs.astro.build/mcp`) searches the official Astro documentation at docs.astro.build. It has one tool, `search_astro_docs`, which takes a single `query` string and nothing else: no filters, no result limit, no version selector.

## When to use it

- Use it before writing or changing anything that touches Astro itself: routing, `.astro` components, content collections, `@astrojs/*` integrations, `astro.config.mjs`, the `astro` CLI, images, middleware, actions, i18n, sessions, or deployment adapters. This project runs Astro 7 (`package.json`) and the index covers v7, so search even for APIs you think you know.
- Use it for the guides AGENTS.md links to. A search returns those pages as section chunks with anchor links, which is faster than fetching the page.
- Astro is the one library where this server, not Context7, is the first stop. Context7 stays the tool for every other library and for third-party Astro integrations that are not in the official docs. Fall back to Context7 only when a search returns nothing relevant.
- Do not use it for Void or Vite+. The index does not know them: a query like "cloudflare void deploy" returns only the `@astrojs/cloudflare` adapter and the Cloudflare deploy guide. Void docs are in `node_modules/void/docs/`, Vite+ docs in `node_modules/vite-plus/docs`.

## How it behaves

- Every call returns 10 chunks as JSON. Each has `title` (`Page|Section`), `source_url` (a docs.astro.build URL with a section anchor), `content` (that section as markdown) and `source_type`. Only the English docs are indexed.
- Chunks are sections, not whole pages. If the section you need ends mid-topic, search again using the next heading, or fetch `source_url` with WebFetch.
- Ranking spans every docs version. Old upgrade guides (v2 through v7) rank next to current pages, so check `source_url` for `/upgrade-to/vN/` and ignore anything older than the project's major unless the task is a migration.
- Code blocks in `content` have their line breaks collapsed, for example `import { defineCollection } from 'astro:content';import { glob } from 'astro/loaders';`. Reformat every snippet before using it; never paste one verbatim.
- A response is roughly 15 to 32 KB. When it exceeds the tool output limit, Claude Code saves it to a file under the session's `tool-results/` directory and returns the path. Grep that file for `"title"` and `"source_url"` to pick the chunk you need instead of reading all of it.
- Queries: a few words naming the feature work best ("content collections", "upgrade to Astro v7 breaking changes"). One concept per query. A combined query spends the 10 slots on two topics and returns shallow results for both.

## Steps

1. Search with the feature name.
2. Read the chunk whose `source_url` matches the project's version and the task; skip the rest.
3. When answering a question, cite the `source_url`.
