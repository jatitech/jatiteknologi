## Development

When starting the dev server, use background mode:

```
pnpm astro dev --background
```

Manage the background server with `pnpm astro dev stop`, `pnpm astro dev status`, and `pnpm astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Void in this project

Void runs in framework mode: Astro owns routing and rendering, and `voidPlugin()` in `astro.config.mjs` adds resource inference, typed bindings and deployment. Read `node_modules/void/docs/integrations/frameworks/astro.md` before touching this setup.

- Void's own `routes/` and `pages/` conventions do not apply. Put pages and API endpoints in `src/pages/`.
- A page or endpoint that uses `void/db`, `void/kv`, `void/storage`, `void/ai` or `env` from `cloudflare:workers` must not export `prerender = true`. With `output: "server"`, on-demand rendering is already the default.
- Declare environment variables in `env.ts` and read them with `import { env } from "void/env"`, not `astro:env`. Client-visible keys use the `VITE_` prefix.
- Void-managed auth is not supported in framework mode; use Better Auth's Astro integration.
- Cloudflare settings live in `void.config.ts`. `.void-wrangler.jsonc` is generated; never edit or commit it. Commit `void.lock.json` once it exists.
- Run the CLI through the package manager: `pnpm void <command>`.

<!--injected-by-void-v1.7.0-->

## Void

- This project uses [Void](https://void.cloud), a full-stack Vite framework for Cloudflare Workers with file-based API routing, server-rendered pages, and typed backend services.
- Use Void's CLI and typed APIs. Before working with Void, read the relevant Markdown docs in `node_modules/void/docs/`; start with `guide/quickstart.md` for setup and `reference/cli.md` for commands.

<!--/injected-by-void-->
