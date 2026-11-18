---
version: alpha
name: Jatiteknologi Website
description: Visual system for the public marketing site of Jatiteknologi (PT Jati Teknologi Indonesia), adapted from a measured study of inkeep.com and corrected for WCAG 2.2 AA.
brand: ./BRAND.md
colors:
  primary: "#1D5FD6"
  primary-hover: "#174BB0"
  primary-container: "#EAF1FF"
  on-primary: "#FFFFFF"
  secondary: "#6EA2FF"
  secondary-container: "#DCE8FF"
  tertiary: "#9C5A22"
  neutral: "#FAF8F4"
  surface: "#FFFFFF"
  surface-sunken: "#F2EFE9"
  on-surface: "#0E1A2B"
  on-surface-variant: "#3A4556"
  muted: "#5B6676"
  outline: "#E4E2DC"
  outline-strong: "#7D8492"
  error: "#C2362B"
  success: "#157A4A"
  warning: "#9A6200"
  dark-background: "#0B1220"
  dark-surface: "#131C2E"
  dark-on-surface: "#F2F5FA"
  dark-on-surface-variant: "#A3AEC0"
  dark-primary: "#6EA2FF"
  dark-on-primary: "#0B1220"
  dark-tertiary: "#E2A464"
  dark-outline: "#26324A"
  dark-outline-strong: "#5E6A85"
typography:
  display-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 72px
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: -0.035em
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: 500
    lineHeight: 1.06
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 44px
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: -0.025em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -0.01em
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.55
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.65
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.55
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.2
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.2
  eyebrow:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.06em
  mono-sm:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
rounded:
  none: 0px
  sm: 6px
  md: 12px
  lg: 20px
  full: 9999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  section-mobile: 72px
  section-tablet: 96px
  section: 128px
  margin-mobile: 20px
  margin-tablet: 32px
  margin: 48px
  gutter: 24px
  container: 1280px
  measure: 40rem
  grid-columns: 12
components:
  page:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
  nav-bar:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.full}"
    height: 64px
    padding: 10px 14px
  nav-link:
    textColor: "{colors.on-surface}"
    typography: "{typography.label-sm}"
    padding: 8px 12px
    rounded: "{rounded.full}"
  hero-headline:
    textColor: "{colors.on-surface}"
    typography: "{typography.display-xl}"
  hero-headline-accent:
    textColor: "{colors.primary}"
    typography: "{typography.display-xl}"
  cta-headline:
    textColor: "{colors.on-surface}"
    typography: "{typography.display-lg}"
  section-headline:
    textColor: "{colors.on-surface}"
    typography: "{typography.headline-lg}"
  feature-headline:
    textColor: "{colors.on-surface}"
    typography: "{typography.headline-md}"
  card-title:
    textColor: "{colors.on-surface}"
    typography: "{typography.headline-sm}"
  lead:
    textColor: "{colors.on-surface-variant}"
    typography: "{typography.body-lg}"
  text-body:
    textColor: "{colors.on-surface-variant}"
    typography: "{typography.body-md}"
  caption:
    textColor: "{colors.muted}"
    typography: "{typography.body-sm}"
  eyebrow:
    textColor: "{colors.primary}"
    typography: "{typography.eyebrow}"
  code-inline:
    backgroundColor: "{colors.surface-sunken}"
    textColor: "{colors.on-surface}"
    typography: "{typography.mono-sm}"
    rounded: "{rounded.sm}"
    padding: 2px 6px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    height: 48px
    padding: 8px 8px 8px 22px
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
  button-arrow-chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    size: 32px
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    height: 48px
    padding: 12px 22px
  button-text:
    textColor: "{colors.on-surface}"
    typography: "{typography.label-sm}"
    height: 44px
  link-inline:
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
  tab-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    height: 40px
    padding: 10px 20px
  tab:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    height: 40px
    padding: 10px 20px
  badge:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.primary}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.full}"
    padding: 4px 10px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  media-frame:
    backgroundColor: "{colors.secondary-container}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.2xl}"
  illustration-line:
    backgroundColor: "{colors.secondary}"
    width: 1.5px
  section-alt:
    backgroundColor: "{colors.surface-sunken}"
    textColor: "{colors.on-surface}"
    padding: "{spacing.section}"
  feature-row:
    textColor: "{colors.on-surface}"
    typography: "{typography.title-md}"
    padding: "{spacing.md}"
  step-number:
    textColor: "{colors.tertiary}"
    typography: "{typography.mono-sm}"
  divider:
    backgroundColor: "{colors.outline}"
    height: 1px
  field-border:
    backgroundColor: "{colors.outline-strong}"
    height: 1px
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    height: 48px
    padding: 12px 16px
  input-error:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.error}"
    typography: "{typography.body-sm}"
  alert-success:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.success}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  alert-warning:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.warning}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  footer:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface-variant}"
    typography: "{typography.body-sm}"
    padding: "{spacing.3xl}"
  section-dark:
    backgroundColor: "{colors.dark-background}"
    textColor: "{colors.dark-on-surface}"
    padding: "{spacing.section}"
  card-dark:
    backgroundColor: "{colors.dark-surface}"
    textColor: "{colors.dark-on-surface-variant}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  button-primary-dark:
    backgroundColor: "{colors.dark-primary}"
    textColor: "{colors.dark-on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    height: 48px
  eyebrow-dark:
    backgroundColor: "{colors.dark-background}"
    textColor: "{colors.dark-primary}"
    typography: "{typography.eyebrow}"
  step-number-dark:
    backgroundColor: "{colors.dark-background}"
    textColor: "{colors.dark-tertiary}"
    typography: "{typography.mono-sm}"
  divider-dark:
    backgroundColor: "{colors.dark-outline}"
    height: 1px
  field-border-dark:
    backgroundColor: "{colors.dark-outline-strong}"
    height: 1px
  icon-button:
    textColor: "{colors.on-surface}"
    rounded: "{rounded.full}"
    size: 44px
---

# Jatiteknologi Website

## Overview

This design system expresses the [Jatiteknologi brand](./BRAND.md) on the public
marketing site: the homepage, the service pages (Implementasi ERPNext, Pengembangan
Perangkat Lunak, Pendampingan TI), "Cara kami bekerja", "Tentang", and contact.

The premise is **a craftsman's drafting table.** The ground is warm paper. The
work is drawn in precise blue line-work: SME objects such as a nota, a stock shelf,
and a cash register, joined by flow lines into one system. A single glint of teak
marks what matters. The site should feel like sitting across from an engineer who
is sketching your business on paper while explaining it plainly. It should not
feel like a SaaS launch page.

The audience is Indonesian SME owners and operations leads who distrust jargon
and vendors who vanish. They often read on a mid-range Android phone. The site
must feel calm, honest about the company's size, and fast. Every page answers
three questions in order: what changes in my daily operations, who will build
it, and what it costs to start.

**What was borrowed from inkeep.com** (measured 2026-11-17 in Chrome at 1624px
wide, homepage only): the warm off-white canvas, the floating glass pill
navigation, soft sky-blue atmospheric washes behind product frames, thin line-art
illustration, monospaced uppercase eyebrows, pill CTAs with a white arrow chip,
alternating media/text feature sections, and two-tone headlines with one blue
phrase.

**What was changed and why:** see "Improvements over the reference" at the end of
this file. In short: every text pair now passes WCAG AA, the type scale is one
coherent ramp on an open-licensed Indonesian typeface, client-logo and
case-study sections are replaced with honest equivalents, and a dark theme,
focus states, error states, and motion rules are defined.

## Colors

A warm paper ground, a blue-black voice, one confident blue for action, and a
rare touch of teak. Brand primitives are mirrored at their exact values. Roles
are assigned here.

| Role | Brand color | Value | Origin |
|---|---|---|---|
| `primary` | Jati Blue (mandatory) | `#1D5FD6` | Mirrored |
| `on-surface` | Ink (mandatory) | `#0E1A2B` | Mirrored |
| `tertiary` | Teak (optional) | `#9C5A22` | Mirrored |
| `neutral` | Paper (optional) | `#FAF8F4` | Mirrored |
| `primary-hover` | none | `#174BB0` | Derived from Jati Blue |
| `primary-container` | none | `#EAF1FF` | Derived from Jati Blue |
| `secondary` | none | `#6EA2FF` | Derived from Jati Blue (decorative sky) |
| `secondary-container` | none | `#DCE8FF` | Derived from Jati Blue (wash) |
| `surface` | none | `#FFFFFF` | Derived |
| `surface-sunken` | none | `#F2EFE9` | Derived from Paper |
| `on-surface-variant` | none | `#3A4556` | Derived from Ink |
| `muted` | none | `#5B6676` | Derived from Ink |
| `outline` / `outline-strong` | none | `#E4E2DC` / `#7D8492` | Derived |
| `error` / `success` / `warning` | none | `#C2362B` / `#157A4A` / `#9A6200` | Derived |
| `dark-*` | none | see tokens | Derived for the dark theme |

- **Primary, Jati Blue (#1D5FD6):** Primary buttons, the blue phrase in two-tone
  headlines, eyebrows, inline links, the active tab. White on it measures 5.74:1.
  On Paper it measures 5.41:1, so it is safe as small text.
- **Primary hover (#174BB0):** Hover and pressed fill for primary buttons (7.87:1
  with white).
- **Primary container (#EAF1FF):** Badge and tag fills, selected list rows.
- **Secondary, Sky (#6EA2FF):** Illustration strokes on light washes, focus-glow
  halos, and the blurred blob behind the closing CTA. **Never text on light
  grounds** (it is under 3:1 on Paper).
- **Secondary container (#DCE8FF):** The wash inside media frames and hero art.
- **Tertiary, Teak (#9C5A22):** Process step numbers ("01"…"04"), the logo's
  tenon, and at most one highlight per page. Never a button fill and
  never a section background.
- **Neutral, Paper (#FAF8F4):** The page ground and the footer. Pure white is for
  cards, inputs, and the nav glass, so they lift off the paper without shadows.
- **Surface sunken (#F2EFE9):** Alternate section bands and inline code.
- **On-surface, Ink (#0E1A2B):** Headlines and primary text (16.48:1 on Paper).
- **On-surface-variant (#3A4556):** Running body copy and lead paragraphs (9.14:1).
- **Muted (#5B6676):** Captions, metadata, footer headings (5.49:1 on Paper). This
  is the lightest permitted text color. The reference's `#9A9898` grey (2.77:1)
  is retired.
- **Outline (#E4E2DC):** Decorative hairlines between feature rows and sections.
- **Outline strong (#7D8492):** Borders of inputs, checkboxes, and secondary
  buttons. It meets the 3:1 non-text contrast minimum on white (3.76:1) and on
  Paper (3.54:1).
- **Status:** Error `#C2362B` (5.13:1 on Paper), Success `#157A4A` (5.06:1),
  Warning `#9A6200` (4.80:1). Status is always paired with an icon and a text
  label, never color alone.

### Dark theme

The site follows `prefers-color-scheme` and offers a manual toggle (the same
behavior as heyris.me). Dark tokens replace light ones by role:

| Light role | Dark token | Value | Check |
|---|---|---|---|
| `neutral` (page) | `dark-background` | `#0B1220` | n/a |
| `surface` | `dark-surface` | `#131C2E` | n/a |
| `on-surface` | `dark-on-surface` | `#F2F5FA` | 17.13:1 on background |
| `on-surface-variant` / `muted` | `dark-on-surface-variant` | `#A3AEC0` | 8.36:1 / 7.60:1 on surface |
| `primary` | `dark-primary` | `#6EA2FF` | 7.38:1 as text; fills take `dark-on-primary` text |
| `on-primary` | `dark-on-primary` | `#0B1220` | 7.38:1 on `dark-primary` |
| `tertiary` | `dark-tertiary` | `#E2A464` | 8.67:1 on background |
| `outline` | `dark-outline` | `#26324A` | Decorative |
| `outline-strong` | `dark-outline-strong` | `#5E6A85` | 3.46:1 / 3.14:1 non-text |

In Penpot (and in code) the dark theme is a parallel `modes/dark` token set that
uses the same role names as `modes/light`. Roles not listed above take these
derived dark values, each checked on the dark grounds:

| Role | Dark value | Check |
|---|---|---|
| `primary-hover` | `#8DB6FF` | 9.15:1 with `dark-on-primary` |
| `primary-container` | `#1A2A4A` | `dark-primary` text on it 5.61:1 |
| `secondary` | `#6EA2FF` | Decorative |
| `secondary-container` | `#16233D` | `dark-on-surface` on it 14.32:1 |
| `surface-sunken` | `#0F1726` | `dark-on-surface-variant` on it 8.01:1 |
| `muted` | `#8E9AAE` | 5.99:1 on surface, 6.58:1 on background |
| `error` / `success` / `warning` | `#FF8A80` / `#5FD39A` / `#F2B84B` | 7.46 / 9.14 / 9.51:1 on surface |

Dark Teak (`#E2A464`) is a lightened derivative of Teak for contrast on
blue-black. It keeps the same meaning and is not a new brand color.

## Typography

**Plus Jakarta Sans** carries every word a person reads: headlines, body, and
buttons. It is an open-licensed (OFL) Indonesian geometric sans, and its slightly
tall x-height holds up well with long Indonesian words. **JetBrains Mono**
carries only what the system "knows": eyebrows, step numbers, technical labels,
and code. It is always uppercase with tracking at the eyebrow size.

| Token | Desktop | Tablet (768) | Mobile (360–767) | Use |
|---|---|---|---|---|
| `display-xl` | 72 / 1.04 / 500 | 56 | 40 | Hero headline, once per page |
| `display-lg` | 56 / 1.06 / 500 | 44 | 36 | Closing CTA headline |
| `headline-lg` | 44 / 1.1 / 500 | 36 | 30 | Section headlines |
| `headline-md` | 32 / 1.15 / 500 | 28 | 26 | Feature headlines in alternating rows |
| `headline-sm` | 24 / 1.25 / 600 | 22 | 20 | Card titles, founder name |
| `title-md` | 18 / 1.35 / 600 | 18 | 17 | Feature-row titles, footer column heads |
| `body-lg` | 20 / 1.55 / 400 | 19 | 18 | Lead paragraphs |
| `body-md` | 17 / 1.65 / 400 | 17 | 16 | Running text (max width `measure`, 40rem) |
| `body-sm` | 15 / 1.55 / 400 | 15 | 15 | Captions, helper text, footer links |
| `label-md` | 16 / 1.2 / 600 | 16 | 16 | Buttons (sentence case) |
| `label-sm` | 15 / 1.2 / 500 | 15 | 15 | Nav links, tabs, text buttons |
| `eyebrow` | Mono 13 / 1.4 / 500, +0.06em, UPPERCASE | 13 | 12 | Section kickers, badges |
| `mono-sm` | Mono 13 / 1.5 / 400 | 13 | 13 | Step numbers, code, data |

In Penpot (and code), mobile sizes are separate typography tokens
`typography.mobile.<name>` (library styles under `Mobile/`), not manual
overrides: display-xl 40/1.08 (−1.4px), display-lg 36/1.1 (−1.08px),
headline-lg 30/1.15 (−0.75px), headline-md 26/1.2 (−0.52px), headline-sm
20/1.3 (−0.2px), body-lg 18/1.55, body-md 16/1.65, eyebrow 12/1.4 (+0.72px).
Mobile display line heights are slightly looser than desktop, because Indonesian
headlines wrap to more lines at 360px.

Rules:
- Tracking tightens as size grows: −0.035em at 72px down to 0 at body sizes.
  Never track body text.
- Headlines use weight 500. Only small titles (`headline-sm`, `title-md`) and
  labels use 600. 700 and above are not used.
- Two-tone headlines: the second phrase, or one key word, takes `primary`. Use
  this once per section at most, as in "Sistem bisnis yang **awet** untuk UMKM."
- Buttons are sentence case in Plus Jakarta Sans. The reference's uppercase mono
  buttons are dropped because uppercase Indonesian labels ("JADWALKAN OBROLAN")
  are slow to read.
- Use `font-variant-numeric: tabular-nums` in tables and prices.
- Load only weights 400, 500, and 600 of Plus Jakarta Sans and 400 and 500 of
  JetBrains Mono, self-hosted as `woff2` with `font-display: swap`.

## Layout

A 12-column grid with a max content width of 1280px. Margins are 20px on mobile,
32px on tablet, and 48px on desktop, with 24px gutters. Spacing follows a 4px
base (`xxs` 4 → `3xl` 64). Vertical section rhythm is 72px on mobile, 96px on
tablet, and 128px on desktop.

| Breakpoint | Width | Margin | Columns | Nav |
|---|---|---|---|---|
| Mobile | 360–767 | 20px | 4 | Logo + menu button + CTA icon |
| Tablet | 768–1023 | 32px | 8 | Logo + menu button + CTA |
| Desktop | 1024–1279 | 48px | 12 | Full links + language switch + CTA |
| Wide | 1280+ | auto (centered 1280) | 12 | Full |

**Homepage blueprint** (adapted from the reference's structure):
1. **Floating nav:** a pill bar, 64px tall, 12px from the top, sticky. Logo |
   Layanan ▾ · Cara kerja · Tentang | ID/EN switch · primary CTA "Jadwalkan
   obrolan" with arrow chip.
2. **Hero:** a two-tone `display-xl` headline across 7 columns, with the lead
   paragraph right-aligned in columns 9–12. Below it is a full-width
   `media-frame` (about 360px tall on desktop) holding the line illustration:
   scattered SME objects on the left flow into one system window on the right,
   where a small white card reads "Stok gudang: cocok ✓".
3. **Platform strip** (replaces "Trusted by"; reference: inkeep.com/integrations):
   one card (`surface`, 1px `outline` stroke, `rounded.lg`, 48px padding; 20px on
   mobile). The header has the eyebrow "INTEGRASI PLATFORM" and a two-tone
   `headline-md`, "Sistem Anda, **tersambung** ke platform yang Anda pakai.", on
   the left. On the right are two check bullets: a 24px circled-check icon in
   `primary` (20px on mobile) beside a `body-md` `on-surface-variant` line: "Kami
   membangun integrasi, aplikasi, dan otomasi lewat API publik tiap platform." and
   "Kami perusahaan independen dan tidak berafiliasi dengan platform ini." Below a
   `divider`, six flat tiles (`rounded.md`, 184 x 148px, 134 x 112px in two
   columns on mobile), ordered Frappe and ERPNext, Odoo, Meta, Shopify, Shopee,
   TikTok Shop (back-office systems first, then sales channels). Each tile is the
   brand colour mixed 12% into white (TikTok: its dark `#161823` at 8%), holds the
   brand logo in its own colour at 40px (32px on mobile), and the brand name in
   `label-md` `on-surface`, centred. The first tile shows the hover state: a deeper
   tint (brand colour at 22% instead of 12%, no border) and a 24px round `surface`
   button at the top right (10px from the edges, 1px `outline` stroke) holding a
   10px `primary` arrow-up-right icon (7px of padding inside the button). Every tile links
   to its platform page. On real tiles, hover and keyboard focus show the deeper
   tint and the arrow button, with no lift (cards never lift). The arrow button is
   decorative (`aria-hidden`). The whole tile is one link with the accessible name
   "Pelajari Frappe dan ERPNext" (brand name included). On touch, the arrow button
   stays hidden and the tile is the tap target. Focus adds the global focus ring
   (see Components). A `body-sm`
   `muted` disclaimer closes the card (see Platform pages). No marquee: it needs a
   pause control (WCAG 2.2.2). The strip names platforms we build for, never
   clients; client logos get their own section, only when real clients approve
   them in writing. **Logo rights are not settled: see Known Gaps, Brand logos.**
4. **Three service sections**, alternating media left and right: eyebrow,
   `headline-md`, 3 `feature-row`s separated by `divider` hairlines (24px icon +
   `title-md` + `body-sm`), and a `button-text` "Pelajari layanan →".
5. **Cara kami bekerja** (replaces the case-study carousel): four steps
   (Dengarkan, Rancang, Bangun bertahap, Dampingi) on a `section-alt` band. Each
   step has a Teak `step-number` and a concentric-ring illustration that gains
   one ring per step.
6. **Founder section:** a real photo, the founder's name in `headline-sm`, and two
   sentences from the approved claims in BRAND.md only.
7. **Closing CTA:** a centered `display-lg` two-tone headline ("Mulai dari satu
   proses. **Tumbuh bertahap.**") over a blurred `secondary` blob. Primary CTA
   plus a secondary "Chat via WhatsApp".
8. **Footer:** logo, then Layanan / Perusahaan / Kontak columns, then the legal line
   "© 2026 PT Jati Teknologi Indonesia · NIB 0410230086416 · Kab. Tangerang,
   Banten" and the language switch.

**Platform pages** (Penpot pages `Platform / Frappe`, `Odoo`, `Meta`, `Shopify`,
`Shopee`, `TikTok Shop`, each with a 1440 and a 360 board; copy and sources in
`docs/platform-pages.md`). Order, set after two advisor reviews on 17 November 2026:
hero (eyebrow, two-tone `display-lg` that leads with the merchant's problem, lead,
the two CTA buttons, a `body-sm` non-affiliation line, and a 400 x 360 brand panel:
the logo in white on a gradient of the brand colour; white on every stop is at
least 3.07:1) → "Masalah umum" (four `surface` cards with dated source labels in
`mono-sm`) → "Solusi" (four numbered rows on `surface-sunken`) → an optional extra
section (Odoo: "Odoo atau ERPNext?"; Meta: per-app matrix; Shopee and TikTok Shop:
"Satu stok untuk semua kanal") → "Cara kerjanya" (platform → Jatiteknologi layer →
client system, plus three notes) → limits ("Batasan yang perlu Anda tahu"; Frappe:
"Open source, milik Anda") on `surface-sunken` → "Pengalaman kami, terus terang"
→ "Biaya, akses API, dan data" → closing CTA with the full disclaimer → footer. On
mobile every row becomes a column and the diagram runs top to bottom. Rules:
never "mitra", "partner", "resmi", "certified", or "Tech Provider" about ourselves;
brand names spelled in full; no rupiah amounts, durations, or SLAs; every fee or
limit has a date and a source; no case studies ("Kami belum punya studi kasus
[platform]"). Disclaimer: "Frappe, ERPNext, Odoo, Meta, WhatsApp, Instagram,
Facebook, Threads, Shopify, Shopee, TikTok, dan TikTok Shop adalah merek dagang
milik pemiliknya masing-masing. Jatiteknologi adalah perusahaan independen dan
tidak berafiliasi dengan, didukung, atau disponsori oleh pemilik merek tersebut."
The Meta page adds: "bukan Meta Business Partner atau Tech Provider".

### Web interface rules

Checked against the Vercel Web Interface Guidelines on 17 November 2026. These
apply when the site is built; sentence case and the first-person "kami" stay,
because BRAND.md sets them.

- **Images and icons:** every logo, icon, and panel image has explicit `width` and
  `height`. A logo next to its name text uses `alt=""`; check icons and other
  decorative icons use `aria-hidden="true"`. The hero brand panel is decorative
  (`alt=""`); the headline carries the meaning.
- **Brand names:** wrap Frappe, ERPNext, Odoo, Meta, WhatsApp, Instagram,
  Facebook, Threads, Shopify, Shopee, TikTok, and TikTok Shop in `translate="no"`
  (the site has an ID/EN switch). Use a no-break space inside "TikTok Shop",
  "Rp1.250", and dates such as "20 Juli 2025".
- **Numbers and dates:** format with `Intl.NumberFormat('id-ID')` and
  `Intl.DateTimeFormat('id-ID')`, never hardcoded strings.
- **Source labels:** each "Sumber: …" label on a problem card is a real `<a>`
  with descriptive text, not plain text.
- **Headlines:** `text-wrap: balance` on `display-*` and `headline-*`, so
  two-tone headlines don't leave a one-word last line on mobile.
- **Fonts:** keep `font-display: swap` and add `<link rel="preload" as="font">`
  for Plus Jakarta Sans 400, 500, and 600.
- **Theme:** set `color-scheme: light dark` on `<html>` and a `<meta
  name="theme-color">` for each scheme, matching `neutral` and the dark
  `background`.
- **Safe areas:** the sticky nav and the mobile sheet add
  `env(safe-area-inset-top)` and `env(safe-area-inset-bottom)`.
- **Structure:** a skip link to the main content is the first focusable element.
  One `h1` per page (the hero headline); sections are `h2`, cards are `h3`.
  Heading anchors get `scroll-margin-top` equal to the nav height plus 16px.
- **Focus:** the global focus ring (see Components) applies to platform tiles and
  source links. The sticky nav must not cover a focused element.

## Elevation & Depth

Depth comes mostly from **tonal layers**: white surfaces on Paper, washed media
frames, and sunken bands. Shadows are rare and soft, tinted toward Ink rather
than black.

| Level | Treatment | Use |
|---|---|---|
| 0 Flat | none | Sections, cards on Paper, footer |
| 1 Ring | `0 0 0 1px rgba(14, 26, 43, 0.06)` | Cards, inputs at rest, product windows inside media frames |
| 2 Float | `0 0 0 1px rgba(255, 255, 255, 0.5), 0 0 20px rgba(29, 95, 214, 0.06), 4px 8px 24px rgba(14, 26, 43, 0.08)` | Floating nav, dropdowns, the window card in hero art |
| 3 Overlay | `0 24px 48px -12px rgba(14, 26, 43, 0.25)` | Mobile menu sheet, modals, toasts |

- The nav uses `surface` at 72% opacity with `backdrop-filter: blur(14px)`,
  measured from the reference. Fall back to solid `surface` when
  `backdrop-filter` is unsupported or when `prefers-reduced-transparency` is set.
- Primary buttons have **no** shadow. The reference's heavy black button shadow is
  dropped, and hover is a color change.
- Media-frame washes: `linear-gradient(160deg, #DCE8FF 0%, #EAF1FF 55%, #F6EBDD 100%)`.
  The faint warm corner is a nod to teak. Use it only inside media frames and the
  CTA blob, never as a page background.
- Background texture: concentric growth-ring arcs in `outline`, 1px, at 60%
  opacity, placed off-canvas in a corner of the hero and the CTA. This replaces
  the reference's dot grid with a motif the brand owns.

## Shapes

Soft, but not bubbly. **Pill** for things you press or tag (`rounded.full`):
buttons, tabs, badges, and the nav bar. **12px** (`rounded.md`) for things that
hold content: cards, inputs, product windows. **20px** (`rounded.lg`) for large
media frames. **6px** (`rounded.sm`) for inline code and small chips inside
illustrations.

Inputs use 12px rather than the reference's pill, because a pill shape breaks for
textareas and multi-line validation. Strokes are 1px everywhere. Focus rings are
the one exception (see Components).

## Components

- **Button primary:** `primary` fill, white label in `label-md`, pill, 48px tall,
  22px left padding. A trailing **arrow chip** (32px white circle, `primary`
  arrow icon) sits 8px from the right edge. This is the reference's signature
  CTA, kept. Hover: `primary-hover` fill, and the arrow moves 2px right. Pressed:
  `primary-hover` with scale 0.98. Disabled: `outline` fill and `muted` label (not
  opacity, so the label stays legible).
- **Button secondary:** white fill, Ink label, 1px `outline-strong` border, pill,
  48px. Use it for "Chat via WhatsApp" with the WhatsApp glyph in Ink. Don't use
  WhatsApp green fills: white on `#25D366` is 1.98:1.
- **Button text:** Ink `label-sm` with a trailing arrow, 44px hit area, and an
  underline on hover.
- **Focus (all interactive elements):** 2px `primary` outline at 2px offset, plus
  a 4px `secondary` halo at 35% opacity. Always visible on keyboard focus
  (`:focus-visible`). On dark: `dark-primary` outline.
- **Nav bar:** the floating glass pill (see Elevation). Links are `label-sm` with a
  pill hover background of `surface-sunken`. The current page link has an Ink
  label and a 4px `primary` dot below it. On mobile, the menu opens a
  full-height sheet at Overlay level, with 56px rows.
- **Language switch:** a two-segment pill "ID | EN". The active segment takes
  `primary-container` fill and `primary` text. It keeps the same page in the
  other language.
- **Eyebrow:** `eyebrow` style in `primary`, uppercase, placed 16px above its
  headline.
- **Tabs (service switcher):** pill tabs, 40px. Active: `primary` fill with a white
  label. Inactive: white with a 1px Ink border, as measured on the reference.
- **Badge:** `primary-container` fill, `primary` mono label, pill, 4×10 padding.
- **Card:** white, 12px radius, Ring elevation, 24px padding. No hover lift. If
  clickable, the whole card is the link and the title underlines on hover.
- **Media frame:** 20px radius, a sky wash, and 48px padding around a white
  product window (12px radius, Float elevation) or a line illustration.
- **Feature row:** 24px line icon in a 40px `primary-container` square (6px
  radius), then `title-md` and a `body-sm` description. Rows are separated by
  `divider` hairlines.
- **Step number:** `mono-sm` in `tertiary`, formatted "01". This is one of the
  few sanctioned uses of Teak.
- **Inputs:** white, 1px `outline-strong` border, 12px radius, 48px tall, 16px
  text (it prevents iOS zoom). The label always sits above the field in
  `label-sm`; placeholders are never used as labels. Error: border and helper
  text in `error`, with an alert icon and the message in plain Indonesian
  ("Nomor WhatsApp belum lengkap"). Success uses the same pattern in `success`.
- **Contact form:** name, business name, WhatsApp or email, and "Apa yang ingin
  dirapikan?" (textarea). No more than four fields. State the response
  expectation honestly; don't promise an SLA.
- **Footer:** Paper ground, `title-md` column heads in `muted`, `body-sm` links in
  `on-surface-variant`, and the legal line in `body-sm` `muted`.
- **Dark variants:** `section-dark`, `card-dark`, `button-primary-dark`,
  `eyebrow-dark`, `step-number-dark`, `divider-dark`, and `field-border-dark` map
  the same components onto dark tokens.

### Illustration system

- 24px grid, 1.5px stroke, round caps and joins, no fills except white windows.
- Light grounds use Ink strokes for objects, `primary` for flow lines and the
  "system" window, and `secondary` for secondary detail. Teak is reserved for
  one highlight per illustration (a checkmark, a coin, the "after" state).
- Subjects are real SME objects: nota/invoice, rak gudang, kasir, timbangan,
  motor kurir, buku besar, WhatsApp-style chat bubbles (generic, no WhatsApp
  logo), and laptop windows with simple wireframe rows.
- UI icons: use one outline family on a 24px grid with a 1.5px stroke (for
  example Lucide; verify its license before shipping). Don't mix icon families.

### Motion

- Hover and color changes take 150ms ease-out. Reveals are a 240ms fade-up of
  8px, once per element, triggered at 15% visibility.
- Content is fully readable with JavaScript off and before any animation runs.
  Unlike the reference's scroll-linked grey-to-black heading fade, no text is
  ever shown at low contrast while it waits to animate.
- `prefers-reduced-motion: reduce` turns off fade-ups, the arrow nudge, and blob
  drift. The blurred CTA blob may drift 20px over 12s only when motion is
  allowed.

## Do's and Don'ts

- **Do** keep every text pair at 4.5:1 or above, and every input or control
  border at 3:1 or above. The token table above has the measured ratios.
- **Do** use one two-tone headline per section, with the blue phrase carrying the
  benefit ("yang awet", "bertahap").
- **Do** draw real SME operations in illustrations; the drawing should explain the
  service.
- **Do** design mobile-first at 360px. The hero headline must fit within 4
  lines at 40px in Indonesian.
- **Do** keep Teak to step numbers, the logo's tenon, and one highlight per page.
- **Don't** use `secondary` (Sky) or any grey lighter than `muted` for text.
- **Don't** add client logos, testimonials, statistics, or case studies until
  they are approved under BRAND.md Governance > Claims.
- **Don't** put shadows on primary buttons or cards on Paper; use Ring and Float
  only where listed.
- **Don't** use uppercase for anything except mono eyebrows and badges.
- **Don't** use stock photos of people, wood-grain textures, gradients outside
  media frames and the CTA blob, or a WhatsApp-green fill.
- **Don't** mix pill and square corners on interactive controls. Content
  containers use 12px or 20px.

## Improvements over the reference

| Area | inkeep.com (measured) | Jatiteknologi |
|---|---|---|
| CTA contrast | White on `#3784FF` = 3.56:1 (fails AA) | White on `#1D5FD6` = 5.74:1 |
| Secondary text | `#9A9898` on canvas = 2.77:1 (fails) | Lightest text is `muted` at 5.49:1 |
| Accent text | `#3278E8` heading span = 4.07:1 | `#1D5FD6` = 5.41:1, safe at any size |
| Type scale | 46 / 54 / 56 / 70 / 40px with mixed tracking, 3 font families | One ramp, one sans and one mono, tracking rule by size |
| Typeface | Neue Haas Grotesk Display (commercial license) | Plus Jakarta Sans (OFL, Indonesian origin), verified |
| Radii | 10 / 11 / 12px near-duplicates | 6 / 12 / 20 / pill, each with one job |
| Buttons | Uppercase mono labels with heavy black shadow | Sentence-case labels, no shadow, defined hover, pressed, disabled, and focus states |
| Social proof | Customer-logo wall and case carousel | Honest foundation strip, process steps, and founder section |
| Background motif | Generic dot grid | Teak growth rings, owned by the brand |
| Themes | Light only | Light and dark, contrast-checked |
| States | Hover and disabled only | Hover, pressed, focus, disabled, error, success, warning |
| Motion | Scroll-linked low-contrast text fades | Short one-time reveals; reduced-motion respected |
| Spec hygiene | 55 lint warnings (36 broken refs) | 0 errors, 0 warnings (`design.md` v0.4.0 lint, 2026-11-17) |

## Penpot handoff

- Create these token sets in Penpot from the frontmatter: `color/light`,
  `color/dark`, `typography`, `radius`, `spacing`. Keep the role names exactly
  (`primary`, `on-surface`, …) so code and design stay in sync. The
  `penpot-foundations` skill can create them.
- Add both fonts in Penpot (both are on Google Fonts, which Penpot ships).
- Build components first (button with arrow chip, nav bar, feature row, card,
  input, step number), then the homepage at 1440 and 360 widths.
- Draw the illustrations on a 24px grid with 1.5px strokes, as Penpot paths.

## Known Gaps

- **Logo:** chosen 17 November 2026 ("Tenon JT", see `brand/logo/GUIDELINES.md`).
  Nav and footer use the horizontal lockup at 28px tall. The trademark search is
  still open.
- **Reference coverage:** only the inkeep.com homepage was studied. Docs, pricing,
  and blog patterns weren't measured.
- **Blog/"Tulisan" layout,** pricing page, and client portal are not designed.
- **Iconography:** line icons come from itshover (github.com/itshover/itshover,
  Apache-2.0, checked 17 November 2026). Ship its LICENSE with the site. Its
  icons animate on hover; keep that to hover only, never autoplay, and turn it
  off with `prefers-reduced-motion`. The platform strip now uses a circled-check
  icon drawn in the same style (itshover's own file for it was not located, so
  confirm or swap before shipping). The feature rows still use one placeholder
  icon.
- **Brand logos (ship-gate):** the design shows brand logos from the Simple Icons
  set, recoloured, because the founder asked for real logos. The owners' own
  rules differ: Frappe forbids recolouring or recreating its logo; Meta, Shopify,
  and TikTok require written approval; Odoo requires its own unmodified files;
  Shopee has no public policy. Before publishing, either get approval and use the
  official files, or use the text fallback (brand name in `label-md`, same tint).
  Details and sources: `docs/platform-pages.md`.
- **Photography:** one founder portrait exists (studio, plain light background,
  added 17 November 2026). It is cropped to 5:6 with the name label removed. Real
  work-session photos don't exist yet.
- **Illustrations:** described, not drawn. They are the first Penpot task after
  tokens and components.
