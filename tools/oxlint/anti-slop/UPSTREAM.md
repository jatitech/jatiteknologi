# anti-slop provenance

## Source

- Repository: https://github.com/dmmulroy/anti-slop
- Commit: `13909c9e07590f5a85d93c62712259fe14a883f7` (2026-10-14)
- Upstream path: `skills/install-anti-slop/assets/anti-slop/`, the skill's bundled copy of `src/` without tests
- Installed: 2026-11-13, by running the `install-anti-slop` skill's `scripts/install.mjs` (skill recorded in `skills-lock.json`)

## Baseline

Every file in this directory except this `UPSTREAM.md` and `LICENSE` (upstream's root MIT licence, added so the copy carries its notice) is byte-identical to the upstream path at the commit above. This was checked by comparing each file's `git hash-object` with the blob SHAs in that commit's tree, 38 of 38 files.

That upstream path at that commit is the pristine base for a future three-way merge.

## Installed entry points

- Generic plugin: `tools/oxlint/anti-slop/index.ts`, registered as `anti-slop` in `vite.config.ts` under `lint.jsPlugins`
- Effect plugin: `tools/oxlint/anti-slop/effect/index.ts` is copied but not registered, because `effect` is not a direct dependency

## Configuration

- `vite.config.ts` turns on every generic rule, plus `oxc/no-accumulating-spread`, at `"error"` with default options.
- Lint and format share the same ignore list, `TOOLING_IGNORE_PATTERNS`, in `vite.config.ts`.
- `@oxlint/plugins` is pinned to exactly `1.94.0`, matching the `oxlint` version Vite+ 1.7.0 installs.

## Intentional deviations from upstream instructions

- No direct `oxlint` dev dependency. `vp lint` and `vp check` use the oxlint that comes with Vite+, so upgrade `@oxlint/plugins` whenever a Vite+ upgrade changes that version.
- The ignore list adds `.grok/**` and `.remember/**`, the agent-tooling folders in this repository, to upstream's list.

## Rule source changes

None.

## Verification at install

- `vp check` passes on the project: formatting, lint and type check.
- A throwaway probe file triggered `no-array-filter-map`, `no-chained-type-assertions`, `no-unknown-parameters`, `require-readable-spacing` and `require-safety-comment-for-type-assertion`, which shows the plugin is loaded.
