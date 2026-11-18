# Penpot MCP

The `penpot` MCP server drives a Penpot design file through Penpot's MCP plugin. It has four tools: `execute_code` (JavaScript against the Penpot plugin API), `export_shape` (PNG or SVG of a shape, for looking at your work), `penpot_api_info` and `high_level_overview`.

These notes were measured on the owner's self-hosted Penpot 2.19 (https://penpot.localhost, run with Docker on Colima; setup notes live in `~/Workspaces/github.com/penpot/local`). If a fact stops holding after a Penpot upgrade, test it again and update this file. Keep project facts (what the file contains, its token names, how it was built) in a separate rule file beside this one, so this file stays reusable.

## Connection

- Calls run inside the Penpot tab the owner has open, through its MCP plugin. "No Penpot instance connected" means no tab is connected: ask the owner to open the file and press MCP → Connect.
- Penpot allows one connected plugin tab per user. Never open Penpot in a browser yourself, and never press Connect in a tab of your own: it disconnects the owner's tab.
- "The Penpot plugin tab appears to be suspended by the browser (no heartbeat for N s)" means Chrome throttled the background tab. Work sent before the error usually finished, so check for it before redoing anything. Wait (arm a Monitor or a background timer, not a chained `sleep`) and retry. If the tab stays suspended, ask the owner to focus it.
- Drive Penpot from one agent at a time. Every call runs in the same tab, which has a single active page, so agents working in parallel move each other's page.
- The MCP URL carries a `userToken`, which is a credential. Configure the server at user scope (`claude mcp add --scope user --transport http penpot "<url>"`, stored in `~/.claude.json`), so it works in every repo and stays out of git. Never add it to a project's `.mcp.json`. Pre-commit hooks that reformat and restage files can pull a modified `.mcp.json` into a commit you didn't mean it for.

## Before the first call

- Load the deferred tools in one ToolSearch call: `select:mcp__penpot__execute_code,mcp__penpot__export_shape,mcp__penpot__penpot_api_info,mcp__penpot__high_level_overview`.
- `high_level_overview` returns about 32 KB and lands in a file. Read it whole once per session; after that, use `penpot_api_info` for single types.

## execute_code facts

- `storage` keeps values between calls but is wiped when the plugin reconnects or the tab reloads. Check for what you stored before relying on it, and keep anything long-lived (helper code, uploaded image references) recreatable from a file.
- The sandbox has `fetch` and `new Function`, but no `crypto.subtle`.
- `fetch` reaches a local server only if it sends `Access-Control-Allow-Origin` (and `Access-Control-Allow-Private-Network: true`). Dev servers can reject the cross-site Penpot origin (Astro's dev server answers 403 through its sec-fetch guard), so serve files from a separate local server. Penpot's CSP is report-only and blocks nothing.
- `penpot.uploadMediaUrl(name, url)` is fetched by the Penpot backend, whose SSRF guard rejects private hosts (`ssrf-blocked-target`). Public URLs work, such as an image on the deployed site. For local files, `fetch` the bytes in the plugin and call `penpot.uploadMediaData(name, bytes, mime)`. Don't loosen the SSRF guard.
- Shapes can only be created or changed on the active page: `await penpot.openPage(page)` first. Opening a page also moves the owner's view.
- Before building, check `penpot.currentPage.name`, because another call may have changed the active page. An agent once built 17 components on the wrong page.
- `penpot.currentFile.name` is read-only.
- `await penpot.waitForLayoutUpdate()` times out after 30 s on large boards. Pass a longer timeout and treat a timeout as "still laying out", not as failure.

## Shapes and styling

- Text line height renders only when it's set on the whole shape (`text.lineHeight = "1.6"`, a ratio). A range-level `lineHeight` is stored but ignored, and the text keeps a 1.2 line height.
- `resize()` sets `growType` to `fixed`. Set `growType` back to `auto-width` or `auto-height` afterwards.
- Boards have no per-side stroke widths (`strokeWidthTop` throws "object is not extensible"). Draw a one-sided border as a thin rectangle bound to the colour token.
- A layer blur renders only with its type: `shape.blur = { type: "layer-blur", value: 20 }`. `{ value }` alone is stored but not drawn.
- `penpot.createBoard()` starts with a white fill. Set `fills = []` for a transparent wrapper.
- Gradient coordinates in fills are fractions of the shape box. Put a gradient or image fill before the colour fill in `fills`, the way CSS paints `background-image` above `background-color`.
- Text decoration takes the text colour, and there's no separate underline colour. If an underline colour matters, draw a thin rectangle.
- Text ranges can't carry a background, so inline code chips inside a paragraph lose theirs.
- `/` in a layer, component, colour or typography name is a path separator. Penpot stores `a/b` as `a / b`, and for library assets it creates groups. Keep `/` out of board names, and use it on purpose for asset groups (`Light/bg`).
- Text inside an imported SVG doesn't wrap. Labels that wrap on the site need text shapes of their own.

## Fonts

- Penpot's Google fonts are fixed instances with no variable axes. A site that pins an axis renders at a different width. Source Serif 4 with `opsz` 20 renders about 6 % wider in Penpot, so lines wrap at different words. Only uploading the matching instance fixes this.
- A family may have fewer weights than the site uses: DM Mono stops at 500. Check the family's variants (`penpot.fonts.findByName`) and map a missing weight to the nearest one that exists. Say which weights you mapped.

## Tokens

- Colour tokens live in token sets, and themes switch between sets (for example one set and theme per colour mode). Mirror the project's design-token source and change the two together.
- Bind with `shape.applyToken(token, ["fill"])` or `["strokeColor"]`. Text ranges can't take tokens.
- A text shape can't keep a fill token and per-range colours at the same time. Applying the token recolours every range, and setting a raw range colour later removes the shape's binding. Mixed-colour text (a paragraph with a differently coloured link) is therefore either token-bound in one colour or exact in raw colours. To keep both, split it into separate text shapes.
- Toggling the theme reapplies each bound token to the whole shape, which overwrites per-range colours. Check bindings by reading `shape.tokens` instead of toggling.
- A fill token replaces every fill on the shape, so don't bind one where a gradient or image layer sits on top.

## Checking your work

- Export with `export_shape` and compare against a Playwright screenshot of the same page at the same width. Lazy images are blank in full-page screenshots unless you set `loading = "eager"` and wait for them first. Dev-only overlays (Astro's dev toolbar, framework error overlays) appear in dev screenshots and aren't part of the design.
- Compare long pages in horizontal bands. A full export of a 6000 px board is too small to judge text wraps.
- Dark mode can't be previewed by toggling the theme (see Tokens). Import layers that exist only in one mode as hidden layers with a suffix such as "(dark mode)". To check, unhide them, export, then restore the hidden states.
- A fix made by hand in Penpot is lost when that board is rebuilt. Put recurring fixes in the generator, and record one-off fixes in the project's rule file so they can be applied again.

## Building a design from a running site

This method worked for turning a live site into Penpot boards.

1. **Extract:** render each page with Playwright at every viewport and colour scheme. Walk the DOM and record boxes (background, per-side borders, radius, gradients, shadows, blur, images, absolutely positioned pseudo-elements) and text runs (family, size, weight, line height, letter spacing, colour, decoration).
   - Computed colours can come back as `color(srgb r g b)` instead of `rgb()`, so parse both, then map each colour to its token name.
   - Skip visually hidden text (`sr-only`), and trim text bounds to the glyphs.
2. **Merge:** combine the light and dark runs into one spec per page and viewport, and flag the layers that exist in only one mode.
3. **Load the generator:** serve the specs and a converter script from a local CORS server, and load the converter into the plugin:

   ```js
   const src = await (await fetch("http://127.0.0.1:<port>/converter.js?t=" + Date.now())).text();
   return await new Function("storage", "penpot", "penpotUtils", `return (async () => { ${src} })();`)(storage, penpot, penpotUtils);
   ```

   Give the converter a version number in `storage`, and check it at the start of each batch, since `storage` can be wiped.
4. **Build:** build one board per page and viewport. Remove the partial board when a build fails.
5. **Agent brief:** when agents do the building, give them a shared brief:
   - the hard rules above
   - the API of the converter
   - the differences you've accepted, so they don't hand-fix them
   - an instruction to fix recurring defects in the converter, not on the board

   Run the agents one at a time.
6. **Verify:** compare each board against its screenshots in bands, check that every single-colour shape is bound to a token, and check the hidden states of the mode-only layers.

Seven pages at two viewports, plus a foundations page and 17 components, took four agents about 70 minutes and 1.0 M tokens. Keep the pipeline in the repo (for example `tools/penpot/`) if you'll run it again. A copy in `/tmp` disappears on reboot.
