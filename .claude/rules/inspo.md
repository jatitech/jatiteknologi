# inspo MCP

The `inspo` server (`https://inspomcp.dev/api/mcp`) is an archive of captured production websites: desktop and 375px mobile screenshots, extracted palettes and fonts, three measured axes, a tagged macrostructure, and a fold-by-fold "autopsy" of the first viewport. It exists to look at real references before designing a page, not to copy them.

## When to use it

- Call it when designing or redesigning a page, screen or section, when the user asks for references or what something should look like, or when the brief names an aesthetic (editorial, brutalist, dark SaaS, agency portfolio).
- Skip it when the design is already decided: by the user's brief, by `DESIGN.md` and `designs/` in this repo, or by a pattern already established in `src/`. When the project and Inspo disagree, the project wins.
- Skip it for copy, logic, tests, config and infrastructure.
- Pair it with the `ui-skills` MCP (see `ui-skills.md`): Inspo for the look, one ui-skill for the implementation rules.

## Budget

Every list row inlines a thumbnail image into the conversation, and that output is reread on every later turn. A complete study is one `recommend`, one or two `search_screens`, then `get_screen` on the 3 to 5 references you keep. A fourth search costs more than it finds.

- Pass `maxTokens` (minimum 300) and a small `limit` on list tools. Results are ranked, so trimmed rows are the weakest; a `budgetNote` in the response says how many were dropped.
- `detail`: `concise` returns northstar, palette and fonts; `standard` (default) adds axes, macrostructure, tags and the autopsy on the top 3 rows; `full` adds the autopsy on every row at about 300 tokens each. Browse with `concise`.
- `find_reference_components` with no `type` returns all 68 archetypes (about 27 KB, overflows to a file). Always pass `type`.

## Vocabulary

Every filter is a strict enum. An out-of-vocabulary value fails with `MCP error -32602: Invalid enum value`. `get_filters` returns every accepted value plus `macrostructureCoverage`, the number of sites per macrostructure; check it before filtering on a rare one (`narrative-workflow` has 2 sites, `map-diagram` 3, `marquee-hero` 156).

- `style`: minimalism, editorial, brutalism, glassmorphism, swiss, maximalism, playful, dark-mode, monochrome, vintage, futurist.
- `industry`: agency, ai, architecture, automotive, consumer-tech, creator, crypto, culture, developer-tools, ecommerce, education, fashion, fintech, food-beverage, furniture, gaming, health, media, music, non-profit, portfolio, saas, travel, type-foundry.
- `macrostructure` (slug or label): bento-grid, long-document, marquee-hero, stat-led, conversational-faq, manifesto, photographic, specimen, catalogue, letter, index-first, narrative-workflow, split-studio, feature-stack, type-specimen, portfolio-grid, map-diagram, ecosystem-index, component-playground.
- `vibe`: calm, loud, playful, serious, luxe, raw, soft, technical, warm, cold. `color`: warm, cool, monochrome, neon, earthy, pastel, saturated, muted, high-contrast. `mode`: light, dark. `pageType`: landing, pricing, features, auth, about, blog, changelog, docs, other. `device`: desktop, mobile.
- Measured axes, more reliable than the tagged `mode`: `paperBand` dark, mid, light; `displayClass` grotesk-sans, geometric-sans, roman-serif, italic-serif, slab-serif, mono, display-condensed-bold, display-heavy, system-native, handwritten; `accentHue` warm, cool, neutral, chromatic-other.
- Component `type`: hero, pricing, features, cta, nav, footer, testimonial, logo-cloud, faq, stat.

## Slugs

Screen slugs are the host with dots replaced by dashes (`clementgrellier-fr`, `linear-app`); subpages append `--path` (`bellroy-com--about-us`). Slugs come from search results; never invent one. A bad slug returns a JSON `error` object with a hint, not an MCP error.

## Tools

- `recommend({brief, ...})`: start here for a brief. Deterministic, no LLM: a hybrid search over the brief, a macrostructure pick by majority among the hits with a `shortlist` of runners-up, 5 exemplars, matching reference components, a palette suggestion, an `evidence` packet (consensus paper band, display class and accent hue over the genre), plus `heroGuidance` and `spacingGuidance`. Optional filters: `macrostructure` (skips the pick), `mode`, `vibe`, `color`, `pageType`, `device`. It has no `industry` or `style` filter, so exemplars can land off-genre (a "developer portfolio" brief returned a clothing retailer as top exemplar). Treat the pick as a shortlist and use `search_screens` with `industry` for genre-true references.
- `search_screens({query, ...filters})`: natural-language query plus any filter above. Default limit 6, maximum 20. The main browsing tool.
- `get_screen({slug})`: the full record for one screen: `autopsy` (FOLD, TYPE, COLOR, SIGNATURE), palette, fonts, tags, `axes`, macrostructure and image URLs (`image` 1440px hero, `fullPage`, `thumb`, `mobile`, `mobileFull`, `imagePng`). The composition reading lives here; call it on the references you keep.
- `get_design_system({slug, live})`: a DESIGN.md for one captured site: colour roles, type ramp with sizes and weights, container width, the source's exposed CSS variables, components present. `live` defaults to true and fetches the source site to fill thin tokens; pass `live: false` unless the captured tokens are thin. It describes someone else's site. Save it as this project's `DESIGN.md` only if the user decides to adopt that direction.
- `find_similar({slug})`: nearest neighbours by design-similarity embedding (`method` says which ranking was used), one result per site. `sameSite: true` includes that site's other pages.
- `compare({slugs})`: 2 to 4 slugs. Per-site palette, fonts, styles, vibe, type-scale steps, spacing and radius scales, container width, plus `shared` (common styles, `sameRegister`). Use it to triangulate a house style from a few references.
- `find_by_color({hex, tolerance})`: sites whose palette sits near a hex colour by OKLAB distance. Default tolerance 0.15 (same family), 0.05 near-identical, 0.30 same hue zone. Use when the brief names a brand colour.
- `find_components({type, ...filters})`: real sites featuring one component type, with a per-element crop (`imageUrl` under `inspomcp.dev/api/component/`). `label` is scraped text and can be messy. For reference code use the two reference tools instead.
- `find_examples_for_macrostructure({name})`: real captures of one macrostructure; `coverage.thin` flags a rare one.
- `find_reference_components({type, macro})` then `get_reference_jsx({type, id})`: the 68 canonical archetypes (7 heroes, 7 footers, and so on) as an index with `macro` as a substring filter, then the React + Tailwind source for one (about 600 tokens) with a header stamp naming its macrostructure, theme and states. A wrong `id` returns `validIds` for that type. The source depends on `--color-bg`, `--color-fg`, `--color-fg-muted` and similar role tokens; the response's `tokens.aliasBlock` maps them onto paper, ink and muted names. Without those variables it renders with invisible borders and a transparent background, silently. This project uses `.astro` components, so read the JSX for structure and rewrite it; do not paste it.
- `get_site_pages({siteSlug})`: a site's captured pages in reading order (landing, pricing, ...). Without `siteSlug` it lists flow-capable sites. `other` is a broad bucket and coverage varies by site.
- `list_collections()` and `get_collection({slug})`: editor-curated issues with a note per screen. Three exist as of 2026-11: `editorial-layouts`, `dark-product-pages`, `soft-commerce`.
- `get_filters()`: the vocabulary above with coverage counts. Zero input.

## Using what comes back

- These are real shipped sites and many break rules a linter would flag. Take their composition, palette logic and type decisions, not their compliance, copy, images or brand.
- Never hotlink capture or thumbnail URLs into this site, and never reproduce another site's copy or imagery.
- Honour `heroGuidance` and `spacingGuidance` from `recommend`: the hero complete inside roughly 1280×800, 80 to 160px between sections at one rhythm, and a centred column whose `padding-inline` is declared separately from section block padding.
- Colour roles and type ramps are heuristic. Keep the ratios and adapt the values to the project's scale rather than copying pixels.
