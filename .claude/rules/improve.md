# improve skill

The `improve` skill, from shadcn ([source](https://github.com/shadcn/improve), MIT), audits the repo as a read-only advisor and writes self-contained implementation plans for a cheaper model to carry out. It is Markdown only: `SKILL.md` plus three files in `references/`, with no scripts. It is installed as a project skill in `.claude/skills/improve/` (copy mode) and recorded in `skills-lock.json`. It isn't installed as the Claude plugin, so it stays in the repo.

- Update: `DISABLE_TELEMETRY=1 DO_NOT_TRACK=1 pnpx skills update improve -p -y`.
- Reinstall: `DISABLE_TELEMETRY=1 DO_NOT_TRACK=1 pnpx skills add shadcn/improve --skill improve --agent claude-code --copy -y`.
- `LICENSE.md` in the skill folder is upstream's MIT licence, which the CLI doesn't copy (it sits at the upstream repo root). After an update or reinstall, restore it from git.

## Invocations

`/improve` runs a full audit (recon, parallel Explore subagents over nine categories, vetting, then a findings table) and waits for you to pick which findings become plans. `quick` and `deep` set the depth. A category word (`security`, `perf`, `tests`) narrows the audit to it. `branch` audits only the current branch's diff, `next` suggests features, `plan <description>` specs one thing without an audit, `review-plan <file>` tightens a plan, `execute <plan>` dispatches an executor and reviews its diff, and `reconcile` refreshes the backlog.

## Where plans go

- `plans/` already exists as Claude Code's plan-mode folder (`plansDirectory` in user settings, ignored by its own `*` `.gitignore`). The skill's rule for that case sends its output to `advisor-plans/` instead: `README.md` (the index and status table) plus `NNN-<slug>.md`.
- `/advisor-plans/` is gitignored. The repo is public and a plan can describe a security finding, so plans stay local. `execute` inlines the plan text into the executor's prompt, so nothing there needs to be committed.
- Don't use `--issues` for security findings without a review first: issues on this repo are public. The skill also asks for confirmation before publishing them.

## `execute` in this repo

- The executor is a `general-purpose` subagent (default model `sonnet`) in a git worktree, which starts without `node_modules` or the generated `.astro/` types. Its plan's first steps must be `pnpm install --frozen-lockfile` and `pnpm astro sync`, or `vp check` and the `types` tests fail.
- The executor commits in its worktree, so the pre-commit hook (`vp staged`: `vp check --fix`, `astro check`, `knip --fix`, then `vp test`) runs there and blocks a commit that fails it. Commit messages follow Conventional Commits.
- On this Mac, Playwright runs `--project=chromium --project=webkit` only (Firefox 159 doesn't start on macOS 27; see `playwright.md`).
- Merging the worktree branch stays your decision. The skill never merges or pushes.

## Fitting it to the project

- `CLAUDE.md`, `AGENTS.md`, `DESIGN.md` and the `.claude/rules/` files win over the skill's generic advice. Recon reads `CLAUDE.md`, `AGENTS.md` and `DESIGN.md`. The design contract (`docs/design-implementation.md`) and `docs/content-authoring.md` sit in the gitignored `docs/` folder, so a worktree executor can't see them: a plan that depends on them has to inline what it needs.
- Known by-design choices to pass to audit subagents, so they aren't reported as findings: `output: "server"` with per-page `prerender`, `build.format: "file"` with `trailingSlash: "never"`, the service worker caching only the offline pages, WebGL refusing software renderers, and `typescript` pinned to `^6`.
