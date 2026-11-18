/**
 * Paths that are not application source: installed agent tooling and the vendored anti-slop plugin.
 * Shared by `vp fmt`, `vp lint` and Knip so all three skip the same files.
 */
export const TOOLING_IGNORE_PATTERNS = [
  ".agent/**",
  ".agents/**",
  ".claude/**",
  ".codex/**",
  ".continue/**",
  ".cursor/**",
  ".gemini/**",
  ".grok/**",
  ".opencode/**",
  ".pi/**",
  ".remember/**",
  ".roo/**",
  ".windsurf/**",
  "tools/oxlint/anti-slop/**",
];
