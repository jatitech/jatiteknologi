# Modern Web Guidance

The `modern-web-guidance` skill, from Google Chrome, Edge, Firefox and MDN ([source](https://github.com/GoogleChrome/modern-web-guidance-src), Apache-2.0), runs a CLI that searches about 200 curated guides on modern HTML, CSS and client-side JS: dialogs and popovers, anchor positioning, view transitions, forms, accessibility, Core Web Vitals and similar. Each guide comes with Baseline compatibility data and a fallback. The search runs offline (BM25 plus a bundled embedding model); `pnpx` downloads the package itself.

It's installed as a project skill in `.claude/skills/modern-web-guidance/` and recorded in `skills-lock.json`, through the Vercel `skills` CLI. It isn't the `modern-web-guidance@googlechrome` plugin, because the plugin also brings a `chrome-extensions` skill that this site doesn't need, and Claude Code can't turn off one skill from a plugin. The copied `guides/` folder is the guides' source. The skill doesn't read it, because the CLI ships its own copy.

- Update: `DISABLE_TELEMETRY=1 DO_NOT_TRACK=1 pnpx skills update modern-web-guidance -p -y`.
- Reinstall: `DISABLE_TELEMETRY=1 DO_NOT_TRACK=1 pnpx skills add GoogleChrome/modern-web-guidance --skill modern-web-guidance --agent claude-code --copy -y`.
- `LICENSE` in the skill folder is upstream's Apache-2.0 licence, which must travel with the copy. After an update or reinstall, check it is still there and restore it from git if not.

## Running the CLI here

- Use `pnpx modern-web-guidance@latest <command>`. The skill's `npx -y ...` fails in this repo with `EBADDEVENGINES`, because `devEngines` in `package.json` requires pnpm. The skill already says to prefer `pnpx` when pnpm is available.
- `search "<2-5 word capability>"`, `retrieve <id>[,<id>]` and `list` are allowlisted in the local settings. A guide over about 9.5 KB is written to a temp file, and the CLI prints its path. Read that file with Read.
- Don't run `legacy-scan` unless the user asks for a modernization audit.

## Telemetry

By default the CLI sends Google the calling agent's name, the guide IDs it retrieves and the search queries. `DISABLE_TELEMETRY=1` in the `env` block of the local settings turns this off for every Claude Code session in this repo. Leave it set unless the owner decides otherwise.

## Fitting it to the project

- The project wins. `DESIGN.md`, the existing `src/` patterns and the anti-slop lint rules override a guide. Guides are written in vanilla HTML, CSS and JS, so carry over the platform feature and its fallback, styled with UnoCSS utilities in `.astro` files.
- Use it alongside `ui-skills` (see `ui-skills.md`). Modern Web Guidance answers which platform API to use and how far back it works. A ui-skill covers visual polish.
- The skill tells the agent to end a reply with a `### Modern Web Guidance` section that credits each guide it applied. Keep it short.
- No browser-support policy is written down yet, so guides fall back to their default: Baseline Widely available features need no fallback, and anything newer follows the guide's fallback. If the owner sets a policy, record it in `CLAUDE.md`.
