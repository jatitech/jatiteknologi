# Penpot build plan: Jatiteknologi website

Source of truth: `DESIGN.md` (visual system) and `BRAND.md` (copy, claims). Read
the sections you need from both before drawing. Never invent colors, sizes, or
copy that contradicts them.

Penpot file: **JatiTeknologi** (open in the user's Chrome, connected via the
Penpot MCP plugin). Pages: `Components`, `Homepage`.

## Run order

| Step | Worker | Page | Canvas region | Depends on |
|---|---|---|---|---|
| A | Components: actions and labels | Components | x 0 to 1400, y 0 to 1400 | foundation (done) |
| B | Components: structure and forms | Components | x 1600 to 3400, y 0 to 1800 | foundation (done) |
| C | Homepage desktop 1440 | Homepage | board at x 0, y 0 | A, B |
| D | Homepage mobile 360 | Homepage | board at x 1600, y 0 | C |

A and B run at the same time on the same page. **Never call `penpot.openPage`
in A or B**, and never touch shapes outside your region. C opens `Homepage`
once at the start. D must not change the page either.

## What already exists (do not recreate)

- Token sets: `primitives`, `semantic`, `modes/light` (active), `modes/dark`
  (inactive). Color role tokens are `color.<role>`: primary, primary-hover,
  primary-container, on-primary, secondary, secondary-container, tertiary,
  neutral, surface, surface-sunken, on-surface, on-surface-variant, muted,
  outline, outline-strong, error, success, warning.
- Spacing tokens: `spacing.xxs|xs|sm|md|lg|xl|2xl|3xl|section-mobile|section-tablet|section|margin-mobile|margin-tablet|margin|gutter`.
- Radius tokens: `radius.none|sm|md|lg|full` (6px, 12px, 20px, 9999).
- Typography tokens `typography.<name>` and library typographies with the same
  `<name>`: display-xl, display-lg, headline-lg, headline-md, headline-sm,
  title-md, body-lg, body-md, body-sm, label-md, label-sm, eyebrow, mono-sm.
- Library colors (Brand / Light / Dark) and 13 library typographies.

## Penpot plugin API cheat sheet

Use the `mcp__penpot__execute_code` tool (load it with ToolSearch
`select:mcp__penpot__execute_code,mcp__penpot__export_shape,mcp__penpot__penpot_api_info`).
Do **not** call `high_level_overview`; the essentials are here.

- Code runs as a function body; `return` a value. `penpot`, `penpotUtils`,
  `storage` are globals. `storage` persists across calls and is shared by all
  workers: write only under your own key (`storage.A`, `storage.B`, …).
- Shapes: `penpot.createBoard()`, `penpot.createRectangle()`,
  `penpot.createEllipse()`, `penpot.createText("…")`, `penpot.createPath()`.
  New shapes land on the active page root; reparent with `parent.appendChild(s)`.
- `x`, `y` are absolute and writable. `width`/`height` are read-only: use
  `resize(w, h)`. `resize` on text sets `growType` to fixed; set it back to
  `"auto-width"` or `"auto-height"`.
- Fills/strokes are arrays you replace whole:
  `s.fills = [{ fillColor: "#1D5FD6", fillOpacity: 1 }]`,
  `s.strokes = [{ strokeColor: "#7D8492", strokeWidth: 1, strokeAlignment: "inner", strokeOpacity: 1 }]`.
  Hex in caps.
- `s.borderRadius = 12`; shadows: `s.shadows = [{ style: "drop-shadow", offsetX: 0, offsetY: 8, blur: 24, spread: 0, color: { color: "#0E1A2B", opacity: 0.08 } }]`
  (check `penpot_api_info("Shadow")` if it errors).
- Flex layout: `const f = board.addFlexLayout(); f.dir = "row"|"column";
  f.rowGap, f.columnGap, f.verticalPadding, f.horizontalPadding,
  f.topPadding…; f.alignItems = "start"|"center"|"end"|"stretch";
  f.justifyContent = "start"|"center"|"end"|"space-between";
  f.horizontalSizing / f.verticalSizing = "fix"|"auto"|"fill"`.
  Children follow `appendChild` order. Child sizing:
  `child.layoutChild.horizontalSizing = "fill"`. Absolute child inside flex:
  `child.layoutChild.absolute = true`.
- Async: after creating or changing layout, `await penpot.waitForLayoutUpdate()`
  before reading sizes in the same call.
- Tokens: `shape.applyToken(token, ["fill"])`, `["strokeColor"]`,
  `["typography"]`, `["borderRadiusTopLeft", "borderRadiusTopRight",
  "borderRadiusBottomRight", "borderRadiusBottomLeft"]`,
  `["paddingLeft", …]`, `["rowGap"]`, `["columnGap"]`. Application is
  **async**: verify `shape.tokens` in a **later** call. Apply at most ~30
  bindings per call. Text fill bindings are flaky: verify and re-apply misses.
- Components: `const c = penpot.library.local.createComponent([board]);
  c.name = "Button/Primary";` → the board becomes the main instance.
  Instances: `penpot.library.local.components.find(c => `${c.path}/${c.name}` === "Button/Primary").instance()`.
  Variants: `penpotUtils.createVariantContainer([{ shape: mainBoard, properties: { State: "Default" } }, …])`
  where each `shape` is a main component's board.
- Visual check: `mcp__penpot__export_shape` with a shape id (PNG). Do this after
  every component group and every page section, and fix what looks wrong.

### Shared helpers (already in `storage.jt`)

- `storage.jt.tok(name)` returns a token or throws.
- `storage.jt.text(parent, chars, typoName, colorTok = "color.on-surface")`
  creates an auto-width text, applies the library typography plus the
  `typography.<typoName>` and color token bindings, and appends it to `parent`
  (pass `null` for page root). For wrapping paragraphs, afterwards call
  `t.resize(width, t.height); t.growType = "auto-height";`.
- `storage.jt.flexBoard(parent, name, dir, { gap, px, py, align, justify, hs, vs, fill, radius })`
  creates a board with flex layout. `fill` and `radius` take token names and
  bind them.
- `storage.jt.audit(root)` lists descendants whose fill does not match their
  bound color token (empty array means OK).

### Known gotchas

- If a call fails with "plugin tab appears to be suspended", wait ~10 seconds
  and retry up to 3 times; if it still fails, stop and report it.
- Token names must not reference themselves.
- Bind shapes to **semantic** tokens (`color.primary`, `spacing.lg`), never to
  primitives (`color.blue.600`, `spacing.24`).
- Every color in a design must be bound to a `color.*` token. The only
  allowed exceptions are the media-frame gradient and blur blob (document them
  in the layer name, for example `wash-gradient (DESIGN.md Elevation)`).

## Run 2: decisions and fixes (read before anything else)

Run 1 (2026-11-17) stopped because Chrome suspended the Penpot tab. Built and
verified in run 1, so **reuse, don't rebuild**: Button/Arrow chip,
Button/Primary, Button/Secondary, Button/Text, Badge, Eyebrow, Step number,
Brand/Logo, Nav/Mobile, Feature/Row. Partly built: two stray `Tab` boards at
(0,0) (delete them and rebuild Tab), `nav-desktop` plain board at x 1600 y 40
(finish it and make it a component). Ids are in `storage.A` and `storage.B`.

API facts learned in run 1:
- Component lookup: Penpot stores "Button/Primary" as `path: "Button"`,
  `name: "Primary"`. Find with `` c => `${c.path}/${c.name}` === "Button/Primary" ``.
  Set `component.name` with a "/" only once (setting it again nests the path).
- `applyToken(..., ["fill"])` resets fill opacity to 1, and reassigning `fills`
  removes the binding. For a translucent token color, add an absolute child
  rectangle (`bg`) bound to the color token and set the **rectangle's layer**
  `opacity`, with the content above it.
- `board.resize()` sets sizing to "fix"; reset `horizontalSizing`/`verticalSizing`
  to "auto" on the board's `flex` when it should hug content.
- `textDecoration` set before `createComponent` doesn't persist; set it after.
- `penpot.currentPage.children` is undefined; use `penpotUtils.findShapes`.
- `path.content` takes an SVG `d` string.
- `storage.jt.text` names layers "Text"; rename them (`label`, `title`, …).
- `storage.jt.audit` checks fills only. Also check `shape.tokens.strokeColor`
  and `shape.tokens.typography` on what you build.
- Don't put two `waitForLayoutUpdate()` calls in one call; split the work.

Decisions (lead, from DESIGN.md):
- Nav glass: `bg` child rectangle bound to `color.surface`, layer opacity 0.72,
  `radius.full`; the blur is code-only (CSS `backdrop-filter`).
- Shadows can't take tokens. Use the exact DESIGN.md Elevation values and name
  the layer or note it; this is an accepted exception.
- The logo wordmark is a graphic, so direct font values (20px/600) are fine.
- Focus variants on **every** interactive component (DESIGN.md Components >
  Focus): add `State=Focus` to Button/Text, Tab, and Language switch.
- Button/Primary Disabled: right padding 22 when the chip is hidden.
- Pressed scale 0.98 is an interaction note, not a static variant change.
- Feature/Row: the divider must sit exactly on the row's bottom edge.

## Naming

- Components: `Category/Name` with variants as `Property=Value`, for example
  `Button/Primary` with `State=Default|Hover|Pressed|Disabled|Focus`.
- Layers: semantic kebab-case (`nav`, `hero`, `cta-button`, `feature-row`,
  `label`, `icon`). No "Rectangle 12".

## Step A: actions and labels (Components page, region x 0–1400, y 0–1400)

Build each as a main component, arranged in rows with 48px gaps, each row
headed by a small `mono-sm` muted text label naming the group (one label per
row, not per instance).

1. **Button/Arrow chip**: 32×32 circle board, `color.surface` fill,
   `radius.full`, centered right-arrow drawn as a path (1.75px stroke,
   `color.primary` stroke token, round caps). One component.
2. **Button/Primary**: pill, 48px tall, `color.primary` fill, label "Jadwalkan
   obrolan" in `label-md` `color.on-primary`, padding left 22, right 8, top and
   bottom 8, gap 12, then an Arrow chip instance. Variants `State`:
   Default, Hover (`color.primary-hover` fill), Pressed (`color.primary-hover`
   fill), Disabled (`color.outline` fill, label `color.muted`, chip hidden),
   Focus (Default plus a 2px `color.primary` outer ring at 2px offset: wrap in a
   transparent board with a 2px `color.primary` stroke and `radius.full`).
3. **Button/Secondary**: pill, 48px, `color.surface` fill, 1px
   `color.outline-strong` inner stroke, label "Chat via WhatsApp" in `label-md`
   `color.on-surface`, padding 12/22, with a 20px chat-bubble line icon (path,
   `color.on-surface` stroke) before the label, gap 8. Variants `State`:
   Default, Hover (`color.surface-sunken` fill), Focus (as above).
4. **Button/Text**: "Pelajari layanan" `label-sm` `color.on-surface` + 16px
   arrow icon, gap 6, 44px tall hit area. Variants `State`: Default, Hover
   (add underline: `textDecoration = "underline"`).
5. **Badge**: pill, `color.primary-container` fill, text "BARU" in `eyebrow`
   `color.primary`, padding 4/10.
6. **Eyebrow**: text "IMPLEMENTASI ERPNEXT" in `eyebrow` `color.primary`.
7. **Step number**: "01" in `mono-sm` `color.tertiary`.
8. **Tab**: pill, 40px, padding 10/20, `label-sm`. Variants `State`: Active
   (`color.primary` fill, `color.on-primary` text), Inactive (`color.surface`
   fill, 1px `color.on-surface` stroke, `color.on-surface` text). Label
   "ERPNext".
9. **Language switch**: two-segment pill "ID | EN", 36px tall, 1px
   `color.outline-strong` stroke; active segment `color.primary-container`
   fill and `color.primary` text, inactive `color.on-surface-variant` text,
   `label-sm`.

Acceptance: every component exists in `penpot.library.local.components`
with the names above; variant groups exist for Button/Primary,
Button/Secondary, Button/Text, Tab; `storage.jt.audit` returns `[]` for your
region; exported PNGs look like the DESIGN.md descriptions.

## Step B: structure and forms (Components page, region x 1600–3400, y 0–1800)

1. **Nav bar** (`Nav/Desktop`): 1344×64 pill, `color.surface` fill at 72%
   opacity (set the fill's `fillOpacity` to 0.72 after binding the token),
   `radius.full`, Float shadow from DESIGN.md (use the last layer
   `4px 8px 24px rgba(14,26,43,0.08)` plus a 20px blur `rgba(29,95,214,0.06)`),
   padding 10/14 (left 20). Left: logo placeholder (see below). Middle: links
   "Layanan" (with a 16px chevron-down), "Cara kerja", "Tentang" in
   `label-sm` `color.on-surface`, gap 8, each link 8/12 padding. Right: a Language
   switch instance and a Button/Primary instance, gap 12. Use space-between.
2. **Nav/Mobile**: 328×56 pill, same styling. Logo left; right: a 40×40 menu
   button (three 18px lines, `color.on-surface`) and a 40px circle primary
   button holding only an arrow icon (white).
3. **Logo** (`Brand/Logo`): proposed mark from BRAND.md: three concentric
   quarter-arcs (radii 6, 11, 16, stroke 2.5, `color.primary`, round caps)
   anchored at the bottom-left corner of a 22×22 box, plus a 4px
   `color.tertiary` dot at the arcs' center. Wordmark "Jatiteknologi" in Plus
   Jakarta Sans 20px weight 600, letter-spacing -0.4, `color.on-surface`, gap
   8. Mark it as a proposal in the component annotation
   (`component.annotation = "Proposed mark — not approved (BRAND.md)"`).
4. **Feature row** (`Feature/Row`): 520px wide, row layout, gap 16, padding
   top/bottom 16, bottom 1px `color.outline` hairline (use a 1px rectangle
   child under the content, or a bottom-only stroke via
   `strokeWidthBottom`). Icon chip: 40×40 `color.primary-container`,
   `radius.sm`, 20px line icon in `color.primary`. Text column: title
   "Stok gudang selalu cocok" (`title-md`, `color.on-surface`) and description
   "Setiap barang masuk dan keluar tercatat otomatis di ERPNext." (`body-sm`,
   `color.on-surface-variant`), gap 4, fill width.
5. **Card** (`Card/Default`): 384px wide, `color.surface`, `radius.md`,
   padding 24, Ring shadow (`0 0 0 1px rgba(14,26,43,0.06)` = spread 1, blur
   0), column gap 12: Step number "01", title "Dengarkan" (`headline-sm`),
   body "Kami datang, melihat cara kerja Anda, dan mencatat masalah yang paling
   mahal." (`body-md`, `color.on-surface-variant`, wraps).
6. **Input** (`Form/Input`): 360px wide column: label "Nama usaha" (`label-sm`
   `color.on-surface`), gap 8, field 48px tall, `color.surface`, 1px
   `color.outline-strong` stroke, `radius.md`, padding 12/16, placeholder
   "cth. Toko Sumber Rejeki" (`body-md`, `color.muted`). Variants `State`:
   Default, Focus (2px `color.primary` stroke), Error (stroke `color.error`,
   helper text below "Nama usaha belum diisi." in `body-sm` `color.error` with a
   16px alert icon).
7. **Media frame** (`Media/Frame`): 640×400, `radius.lg`, fill = linear
   gradient 160° `#DCE8FF` → `#EAF1FF` (55%) → `#F6EBDD` (name it
   `wash-gradient (DESIGN.md Elevation)`), padding 48, containing a white
   "window" board (`color.surface`, `radius.md`, Float shadow) with a 40px
   header row (three 8px dots in `color.outline`, title "Sistem Anda" in
   `label-sm`) and three wireframe rows (12px tall `color.surface-sunken`
   bars of 70%, 90%, 55% width, `radius.sm`), plus a small status chip
   "Stok gudang: cocok" with a check icon in `color.success`.

Acceptance: as in Step A, for this region.

## Step C: Homepage desktop (Homepage page, board `Home/Desktop 1440`, x 0, y 0)

Open the page once: `await penpot.openPage(penpotUtils.getPageByName("Homepage"))`.
Board 1440 wide, `color.neutral` fill, column flex, height auto. Content
column 1280 max (margins 80 at 1440). Use component **instances** from the
library wherever one exists. Build and export-check one section at a time:

1. **nav**: Nav/Desktop instance, 12px from the top (absolute, x 48).
2. **hero** (padding top 160, bottom 64): two-tone headline in `display-xl`
   across ~760px: "Sistem bisnis yang awet untuk UMKM yang terus tumbuh."
   with "awet" in `color.primary` (style a text range: `t.getRange(a, b).fills = [...]`
   and bind; if range binding fails, keep the hex and note it). Right column,
   bottom-aligned, `body-lg` `color.on-surface-variant`, 400px wide:
   "Kami membangun dan merawat sistem bisnis untuk UMKM: ERPNext, perangkat
   lunak khusus, dan pendampingan TI. Anda bicara langsung dengan engineer
   yang membangunnya." Then a row with Button/Primary and Button/Secondary
   instances (gap 12). Then a full-width (1280×420) Media frame instance (or
   a wider clone of it) holding a line illustration: on the left, four small
   line icons (receipt, shelf, cash register, delivery motorbike) in
   `color.on-surface` 1.5px strokes, connected by `color.primary` flow lines
   into the white system window on the right.
3. **foundation strip**: eyebrow "FONDASI YANG KAMI PAKAI" (`color.muted`
   eyebrow) and a row in `mono-sm` `color.muted`: "ERPNext · Frappe · Laravel ·
   TypeScript · PostgreSQL". Text only, no logos. Padding 48 top and bottom,
   hairline `color.outline` above.
4. **services** (three alternating sections, 128px vertical rhythm). Each:
   Media frame (left, then right, then left) 628 wide + text column 580:
   Eyebrow, `headline-md` headline, three Feature/Row instances with
   overridden text, Button/Text "Pelajari layanan".
   - "IMPLEMENTASI ERPNEXT" / "Pindah dari spreadsheet ke ERPNext, tanpa
     terikat pada satu vendor." Rows: "Stok, pesanan, dan keuangan di satu
     tempat"; "Data dan kode tetap milik Anda"; "Pindah bertahap, mulai dari
     satu proses".
   - "PENGEMBANGAN PERANGKAT LUNAK" / "Perangkat lunak yang mengikuti cara
     kerja Anda, bukan sebaliknya." Rows: "Aplikasi web dan sistem internal";
     "Integrasi dengan alat yang sudah Anda pakai"; "Dokumentasi untuk setiap
     sistem".
   - "PENDAMPINGAN TI" / "Kami tidak menghilang setelah serah terima." Rows:
     "Pemantauan dan perbaikan rutin"; "Penyesuaian saat usaha berkembang";
     "Satu engineer yang mengenal sistem Anda". (Do **not** use the word
     "konsultasi" anywhere: BRAND.md Governance > Claims.)
5. **how we work** on a `color.surface-sunken` band, padding 128/80:
   eyebrow "CARA KAMI BEKERJA", `headline-lg` "Lapis demi lapis, seperti
   lingkar tahun kayu jati.", then 4 Card instances in a row (gap 24, each
   fill width): 01 Dengarkan / 02 Rancang / 03 Bangun bertahap / 04
   Dampingi, with one-sentence bodies:
   "Kami melihat cara kerja Anda dan mencatat masalah yang paling mahal.";
   "Kami menuliskan lingkup, biaya, dan jadwal sebelum mulai.";
   "Kami mulai dari satu proses, lalu menambah lapis berikutnya.";
   "Setelah sistem dipakai, kami tetap memantau dan memperbaikinya."
6. **founder**: two columns. Left: a 400×480 photo placeholder board
   (`color.secondary-container`, `radius.lg`, centered `mono-sm` muted text
   "Foto pendiri"). Right: eyebrow "YANG MEMBANGUN SISTEM ANDA",
   `headline-sm` "Risqi Romadhoni, pendiri", `body-md` paragraph:
   "Saya membangun perangkat lunak sejak 2016. Di Yummy Corp, saya membantu
   sistem pesanan Yummyshop melayani lebih dari 50.000 pedagang UMKM. Di
   Virtual Spirit, saya mengembangkan Medplanner, aplikasi medis untuk
   pemerintah Malaysia." Then `body-sm` muted: "Pengalaman di atas adalah
   pengalaman pribadi pendiri di perusahaan sebelumnya."
7. **closing CTA**: centered, padding 160/80, a 720×420 blurred ellipse
   behind (`color.secondary` fill at 35% opacity, layer blur 120; name it
   `cta-blob (DESIGN.md Elevation)`), `display-lg` two-tone "Mulai dari satu
   proses. Tumbuh bertahap." with "Tumbuh bertahap." in `color.primary`,
   then Button/Primary + Button/Secondary.
8. **footer**: `color.neutral`, padding 64/80, hairline above. Logo instance
   + `body-sm` line "Teknologi sekuat jati."; columns "Layanan" (Implementasi
   ERPNext, Pengembangan perangkat lunak, Pendampingan TI), "Perusahaan"
   (Cara kerja, Tentang, Tulisan), "Kontak" (pt@jatiteknologi.com, Tangerang,
   Banten), heads in `title-md` `color.muted`. Bottom row: "© 2026 PT Jati
   Teknologi Indonesia · NIB 0410230086416 · Kab. Tangerang, Banten" in
   `body-sm` `color.muted`, and a Language switch instance on the right.

Acceptance: board `Home/Desktop 1440` exists, 1440 wide, auto height, no
child overflows horizontally; every text color is token-bound (`audit`
returns `[]`); export the full board and each section, and confirm visually.

## Step D: Homepage mobile (Homepage page, board `Home/Mobile 360`, x 1600, y 0)

Same content and order as C, adapted per DESIGN.md Layout: 360 wide, margins
20, sections 72px apart, single column. Mobile type sizes from the DESIGN.md
typography table: set `fontSize` directly on the text **after** applying the
token (display-xl → 40, display-lg → 36, headline-lg → 30, headline-md → 26,
headline-sm → 20, body-lg → 18, body-md → 16, eyebrow 12) and keep the
typography token binding for family and weight; record each override in the
layer name suffix ` (m)`. Nav/Mobile instance on top. Media frames 320 wide,
260 tall. Cards stack vertically. Buttons full width (fill). Footer columns
stack. The hero headline must fit within 4 lines.

Acceptance: board `Home/Mobile 360` exists, 360 wide, nothing wider than 320
inside the margins, all texts token-bound, export checked.

## Report format (every worker)

Return:
1. What you built (component names / sections) and their shape ids.
2. Anything you could not do or did differently, and why.
3. `storage.jt.audit` result for your region.
4. Paths of exported PNGs you inspected (or "inspected via export_shape").
