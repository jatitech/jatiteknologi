# Jatiteknologi logo guidelines

Chosen 17 November 2026: concept B, "Tenon JT". The founder delegated the choice
("I will follow your best choices"). A trademark search is still open, see the
end of this page.

## 1. The logo

- **Idea:** the J and T of Jati Teknologi, joined like a mortise and tenon. The
  joint stands for what the studio builds: systems that fit a business and hold.
- **Colour:** the T bar and the J are Jati Blue. The tenon, the small piece that
  joins them, is Teak. It is the only Teak in the logo.
- **Versions:**
  - horizontal lockup (primary): `jatiteknologi-horizontal.svg`
  - stacked lockup, for square spaces: `jatiteknologi-stacked.svg`
  - symbol alone, for avatars and icons: `jatiteknologi-symbol.svg`
  - small-size symbol, for 32 px and below: `jatiteknologi-symbol-small.svg`
  - wordmark alone, when the symbol is already on screen: `jatiteknologi-wordmark.svg`
- **Files:** the masters are in `brand/logo/`. One-colour, reversed, PNG, favicon
  and app-icon files are in `brand/logo/export/`. All files are for screens (RGB).
  Ask a printer to make CMYK or spot-colour files from the SVG masters.

## 2. Clear space

Keep an empty zone around the logo on every side. The zone is as tall as the T bar
of the symbol. It grows and shrinks with the logo, so never use a fixed distance.

## 3. Minimum size

| Version | Screen | Print |
|---|---|---|
| Horizontal lockup | 120 px wide | 30 mm wide |
| Stacked lockup | 80 px wide | 20 mm wide |
| Symbol | 16 px; use the small-size symbol at 32 px and below | 6 mm |

## 4. Colour

| Name | HEX | RGB | CMYK (starting point) |
|---|---|---|---|
| Jati Blue | #1D5FD6 | 29 95 214 | C86 M56 Y0 K16 |
| Teak | #9C5A22 | 156 90 34 | C0 M42 Y78 K39 |
| Ink (wordmark) | #0E1A2B | 14 26 43 | C67 M40 Y0 K83 |

The CMYK values are simple conversions from RGB. Check them on a printed proof
before a print run. No Pantone match has been chosen yet; pick one with the
printer from a physical swatch book.

**Approved logo and background pairs:**
- full colour on white or on Paper (#FAF8F4)
- all white on Jati Blue
- all white on Ink
- all Ink, or all black, on white
- on photos, use the all-white or all-Ink version on a calm area of the photo

## 5. Typography

- The wordmark is Plus Jakarta Sans SemiBold (600), tracked −0.02 em, drawn as
  outlines. Never retype it.
- Headlines and body copy also use Plus Jakarta Sans. JetBrains Mono is for
  technical labels.
- Both fonts use the SIL Open Font License 1.1, which allows use in a logo.

## 6. Don'ts

- Don't stretch, squash or rotate the logo.
- Don't recolour it outside Jati Blue, Teak, Ink and white.
- Don't make the tenon blue in the full-colour version, or Teak anywhere else.
- Don't add shadows, outlines, gradients or glows.
- Don't move, resize or rearrange the parts of a lockup.
- Don't place it on wood-grain textures or busy photos.
- Don't recreate the wordmark by typing it.

## 7. Handover notes

- **Trademark:** not searched. Before printing or registering, search PDKI
  (Indonesia's IP database) and the WIPO Global Brand Database. Also run a
  reverse image search.
- **Geometry:** the symbol is built on a 256 grid from rectangles and two arcs.
  The T bar is 40 units tall, the J stem is 48 wide, and the gap at the joint is
  22. The symbol sits 4 units above centre, for optical balance. The tenon
  overlaps the T bar and the J by 4 units, so no seams show at any size.
- **Small-size symbol:** heavier bars, a wider joint (28 units) and a wider
  tenon, so the joint still shows at 16 to 32 px. The favicon and app icon use it.
- **Wordmark outlines:** made from the Plus Jakarta Sans SemiBold file served by
  Google Fonts (v12). Spacing is the font's own advance widths with −0.02 em
  tracking. The font's kerning table was not applied; the spacing was checked by
  eye.
- **Reversed versions:** the white files use the same geometry as the colour
  files. They were not thinned to offset glow on dark backgrounds. The bars are
  heavy enough that this is hard to see; review it if the logo is used very large
  on a dark sign.
- **Round 1 concepts:** kept in `brand/logo/concepts/` and on the "Logo concepts"
  page in Penpot.
- **Rebuild:** `brand/logo/tools/build_logo.py` generates the masters. It needs
  Python with fontTools and brotli, and the Plus Jakarta Sans SemiBold latin WOFF2
  file: `python3 tools/build_logo.py <font.woff2> brand/logo`.
