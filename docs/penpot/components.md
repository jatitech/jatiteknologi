# Penpot page: Components

Generated read-only from the JatiTeknologi Penpot file (2026-11-17). One line per layer: name [type WxH] "text" font/weight/size, flex:dir gap/gap padding, token bindings.

```
=== Brand / Logo
Brand / Logo [board 160x28] flex:row g8/8 p0,0,0,0 a:center/start r0
  logo-lockup [group 160x28]
    base-background [rectangle 160x28]
    svg-path [path 3x4]
    svg-path [path 23x6]
    svg-path [path 14x19]
    svg-path [path 129x21]
=== Button / Arrow chip
Button / Arrow chip [board 32x32] flex:row g0/0 p0,0,0,0 a:center/center tk:{"fill":"color.surface","borderRadiusTopLeft":"radius.full","borderRadiusTopRight":"radius.full","borderRadiusBottomRight":"radius.full","borderRadiusBottomLeft":"radius.full"} r9999
  icon [path 10x8] tk:{"strokeColor":"color.primary"}
=== Nav / Mobile
Nav / Mobile [board 328x56] flex:row g12/12 p8,8,8,20 a:center/space-between tk:{"borderRadiusBottomLeft":"radius.full","borderRadiusTopLeft":"radius.full","borderRadiusTopRight":"radius.full","borderRadiusBottomRight":"radius.full"} r9999
  bg [rectangle 328x56] tk:{"fill":"color.surface","borderRadiusTopLeft":"radius.full","borderRadiusTopRight":"radius.full","borderRadiusBottomRight":"radius.full","borderRadiusBottomLeft":"radius.full"}
  Brand / Logo [board 160x28] flex:row g8/8 p0,0,0,0 a:center/start r0
    logo-lockup [group 160x28]
      base-background [rectangle 160x28]
      svg-path [path 3x4]
      svg-path [path 23x6]
      svg-path [path 14x19]
      svg-path [path 129x21]
  nav-actions [board 88x40] flex:row g8/8 p0,0,0,0 a:center/start r0
    nav-menu-button [board 40x40] r0
      menu-icon [path 18x14] tk:{"strokeColor":"color.on-surface"}
    nav-cta-icon [board 40x40] flex:row g0/0 p0,0,0,0 a:center/center tk:{"fill":"color.primary","borderRadiusTopLeft":"radius.full","borderRadiusTopRight":"radius.full","borderRadiusBottomRight":"radius.full","borderRadiusBottomLeft":"radius.full"} r9999
      icon-arrow [board 20x20] r0
        arrow-path [path 12x10] tk:{"strokeColor":"color.on-primary"}
=== Button / Primary
Button / Primary [board 1306x116] r20
  Button / Primary [board 226x56] flex:row g0/0 p4,4,4,4 a:center/center tk:{"borderRadiusTopLeft":"radius.full","borderRadiusTopRight":"radius.full","borderRadiusBottomRight":"radius.full","borderRadiusBottomLeft":"radius.full","strokeColor":"color.primary"} r9999
    body [board 218x48] flex:row g12/12 p8,8,8,22 a:center/start tk:{"fill":"color.primary","borderRadiusTopLeft":"radius.full","borderRadiusTopRight":"radius.full","borderRadiusBottomRight":"radius.full","borderRadiusBottomLeft":"radius.full"} r9999
      label [text 144x20] "Jadwalkan obrolan" Plus Jakarta Sans/600/16 tk:{"typography":"typography.label-md","fill":"color.on-primary"}
      arrow-chip [board 32x32] flex:row g0/0 p0,0,0,0 a:center/center tk:{"fill":"color.surface","borderRadiusTopLeft":"radius.full","borderRadiusTopRight":"radius.full","borderRadiusBottomRight":"radius.full","borderRadiusBottomLeft":"radius.full"} r9999
        icon [path 10x8] tk:{"strokeColor":"color.primary"}
  Button / Primary [board 188x48] flex:row g12/12 p8,22,8,22 a:center/start tk:{"fill":"color.outline","borderRadiusTopLeft":"radius.full","borderRadiusTopRight":"radius.full","borderRadiusBottomRight":"radius.full","borderRadiusBottomLeft":"radius.full"} r9999
    label [text 144x20] "Jadwalkan obrolan" Plus Jakarta Sans/600/16 tk:{"typography":"typography.label-md","fill":"color.muted"}
    arrow-chip [board 32x32] flex:row g0/0 p0,0,0,0 a:center/center tk:{"fill":"color.surface","borderRadiusTopLeft":"radius.full","borderRadiusTopRight":"radius.full","borderRadiusBottomRight":"radius.full","borderRadiusBottomLeft":"radius.full"} r9999
      icon [path 10x8] tk:{"strokeColor":"color.primary"}
  Button / Primary [board 218x48] flex:row g12/12 p8,8,8,22 a:center/start tk:{"fill":"color.primary-hover","borderRadiusTopLeft":"radius.full","borderRadiusTopRight":"radius.full","borderRadiusBottomRight":"radius.full","borderRadiusBottomLeft":"radius.full"} r9999
    label [text 144x20] "Jadwalkan obrolan" Plus Jakarta Sans/600/16 tk:{"typography":"typography.label-md","fill":"color.on-primary"}
    arrow-chip [board 32x32] flex:row g0/0 p0,0,0,0 a:center/center tk:{"fill":"color.surface","borderRadiusTopLeft":"radius.full","borderRadiusTopRight":"radius.full","borderRadiusBottomRight":"radius.full","borderRadiusBottomLeft":"radius.full"} r9999
      icon [path 10x8] tk:{"strokeColor":"color.primary"}
  Button / Primary [board 218x48] flex:row g12/12 p8,8,8,22 a:center/start tk:{"fill":"color.primary-hover","borderRadiusTopLeft":"radius.full","borderRadiusTopRight":"radius.full","borderRadiusBottomRight":"radius.full","borderRadiusBottomLeft":"radius.full"} r9999
    label [text 144x20] "Jadwalkan obrolan" Plus Jakarta Sans/600/16 tk:{"typography":"typography.label-md","fill":"color.on-primary"}
    arrow-chip [board 32x32] flex:row g0/0 p0,0,0,0 a:center/center tk:{"fill":"color.surface","borderRadiusTopLeft":"radius.full","borderRadiusTopRight":"radius.full","borderRadiusBottomRight":"radius.full","borderRadiusBottomLeft":"radius.full"} r9999
      icon [path 10x8] tk:{"strokeColor":"color.primary"}
  Button / Primary [board 218x48] flex:row g12/12 p8,8,8,22 a:center/start tk:{"fill":"color.primary","borderRadiusTopLeft":"radius.full","borderRadiusTopRight":"radius.full","borderRadiusBottomRight":"radius.full","borderRadiusBottomLeft":"radius.full"} r9999
    label [text 144x20] "Jadwalkan obrolan" Plus Jakarta Sans/600/16 tk:{"typography":"typography.label-md","fill":"color.on-primary"}
    arrow-chip [board 32x32] flex:row g0/0 p0,0,0,0 a:center/center tk:{"fill":"color.surface","borderRadiusTopLeft":"radius.full","borderRadiusTopRight":"radius.full","borderRadiusBottomRight":"radius.full","borderRadiusBottomLeft":"radius.full"} r9999
      icon [path 10x8] tk:{"strokeColor":"color.primary"}
=== Nav / Desktop
Nav / Desktop [board 1344x64] flex:row g0/0 p10,14,10,20 a:center/space-between tk:{"borderRadiusBottomLeft":"radius.full","borderRadiusTopLeft":"radius.full","borderRadiusTopRight":"radius.full","borderRadiusBottomRight":"radius.full"} r9999
  bg [rectangle 1344x64] tk:{"fill":"color.surface","borderRadiusTopLeft":"radius.full","borderRadiusTopRight":"radius.full","borderRadiusBottomRight":"radius.full","borderRadiusBottomLeft":"radius.full"}
  Brand / Logo [board 160x28] flex:row g8/8 p0,0,0,0 a:center/start r0
    logo-lockup [group 160x28]
      base-background [rectangle 160x28]
      svg-path [path 3x4]
      svg-path [path 23x6]
      svg-path [path 14x19]
      svg-path [path 129x21]
  nav-links [board 298x34] flex:row g8/8 p0,0,0,0 a:center/start r0
    link-layanan [board 104x34] flex:row g4/4 p8,12,8,12 a:center/start r0
      label [text 60x18] "Layanan" Plus Jakarta Sans/500/15 tk:{"typography":"typography.label-sm","fill":"color.on-surface"}
      icon-chevron-down [board 16x16] r0
        chevron-path [path 8x4] tk:{"strokeColor":"color.on-surface"}
    link-cara-kerja [board 96x34] flex:row g4/4 p8,12,8,12 a:center/start r0
      label [text 72x18] "Cara kerja" Plus Jakarta Sans/500/15 tk:{"typography":"typography.label-sm","fill":"color.on-surface"}
    link-tentang [board 82x34] flex:row g4/4 p8,12,8,12 a:center/start r0
      label [text 58x18] "Tentang" Plus Jakarta Sans/500/15 tk:{"typography":"typography.label-sm","fill":"color.on-surface"}
  nav-actions [board 319x48] flex:row g12/12 p0,0,0,0 a:center/start r0
    Language switch [board 89x36] flex:row g0/0 p2,2,2,2 a:center/start tk:{"strokeColor":"color.outline-strong","borderRadiusTopLeft":"radius.full","borderRadiusTopRight":"radius.full","borderRadiusBottomRight":"radius.full","borderRadiusBottomLeft":"radius.full"} r9999
      segment-id [board 40x32] flex:row g0/0 p0,12,0,12 a:center/center tk:{"fill":"color.primary-container","borderRadiusTopLeft":"radius.full","borderRadiusTopRight":"radius.full","borderRadiusBottomRight":"radius.full","borderRadiusBottomLeft":"radius.full"} r9999
        label [text 16x18] "ID" Plus Jakarta Sans/500/15 tk:{"typography":"typography.label-sm","fill":"color.primary"}
      segment-en [board 45x32] flex:row g0/0 p0,12,0,12 a:center/center tk:{"borderRadiusTopLeft":"radius.full","borderRadiusTopRight":"radius.full","borderRadiusBottomRight":"radius.full","borderRadiusBottomLeft":"radius.full"} r9999
        label [text 21x18] "EN" Plus Jakarta Sans/500/15 tk:{"typography":"typography.label-sm","fill":"color.on-surface-variant"}
    Button / Primary [board 218x48] flex:row g12/12 p8,8,8,22 a:center/start tk:{"fill":"color.primary","borderRadiusTopLeft":"radius.full","borderRadiusTopRight":"radius.full","borderRadiusBottomRight":"radius.full","borderRadiusBottomLeft":"radius.full"} r9999
      label [text 144x20] "Jadwalkan obrolan" Plus Jakarta Sans/600/16 tk:{"typography":"typography.label-md","fill":"color.on-primary"}
      arrow-chip [board 32x32] flex:row g0/0 p0,0,0,0 a:center/center tk:{"fill":"color.surface","borderRadiusTopLeft":"radius.full","borderRadiusTopRight":"radius.full","borderRadiusBottomRight":"radius.full","borderRadiusBottomLeft":"radius.full"} r9999
        icon [path 10x8] tk:{"strokeColor":"color.primary"}
=== Button / Secondary
Button / Secondary [board 821x116] r20
  Button / Secondary [board 227x56] flex:row g0/0 p4,4,4,4 a:center/center tk:{"borderRadiusTopLeft":"radius.full","borderRadiusTopRight":"radius.full","borderRadiusBottomRight":"radius.full","borderRadiusBottomLeft":"radius.full","strokeColor":"color.primary"} r9999
    body [board 219x48] flex:row g8/8 p12,22,12,22 a:center/start tk:{"fill":"color.surface","borderRadiusTopLeft":"radius.full","borderRadiusTopRight":"radius.full","borderRadiusBottomRight":"radius.full","borderRadiusBottomLeft":"radius.full","strokeColor":"color.outline-strong"} r9999
      icon [board 20x20] flex:row g0/0 p0,0,0,0 a:center/center r0
        glyph [path 12x14] tk:{"strokeColor":"color.on-surface"}
      label [text 147x20] "Chat via WhatsApp" Plus Jakarta Sans/600/16 tk:{"typography":"typography.label-md","fill":"color.on-surface"}
  Button / Secondary [board 219x48] flex:row g8/8 p12,22,12,22 a:center/start tk:{"fill":"color.surface-sunken","borderRadiusTopLeft":"radius.full","borderRadiusTopRight":"radius.full","borderRadiusBottomRight":"radius.full","borderRadiusBottomLeft":"radius.full","strokeColor":"color.outline-strong"} r9999
    icon [board 20x20] flex:row g0/0 p0,0,0,0 a:center/center r0
      glyph [path 12x14] tk:{"strokeColor":"color.on-surface"}
    label [text 147x20] "Chat via WhatsApp" Plus Jakarta Sans/600/16 tk:{"typography":"typography.label-md","fill":"color.on-surface"}
  Button / Secondary [board 219x48] flex:row g8/8 p12,22,12,22 a:center/start tk:{"fill":"color.surface","borderRadiusTopLeft":"radius.full","borderRadiusTopRight":"radius.full","borderRadiusBottomRight":"radius.full","borderRadiusBottomLeft":"radius.full","strokeColor":"color.outline-strong"} r9999
    icon [board 20x20] flex:row g0/0 p0,0,0,0 a:center/center r0
      glyph [path 12x14] tk:{"strokeColor":"color.on-surface"}
    label [text 147x20] "Chat via WhatsApp" Plus Jakarta Sans/600/16 tk:{"typography":"typography.label-md","fill":"color.on-surface"}
=== Button / Text
Button / Text [board 576x112] r20
  Button / Text [board 156x52] flex:row g6/6 p4,12,4,12 a:center/start tk:{"strokeColor":"color.primary","borderRadiusTopLeft":"radius.full","borderRadiusTopRight":"radius.full","borderRadiusBottomRight":"radius.full","borderRadiusBottomLeft":"radius.full"} r9999
    label [text 110x18] "Pelajari layanan" Plus Jakarta Sans/500/15 tk:{"typography":"typography.label-sm","fill":"color.on-surface"}
    icon [board 16x16] flex:row g0/0 p0,0,0,0 a:center/center r0
      glyph [path 10x8] tk:{"strokeColor":"color.on-surface"}
  Button / Text [board 132x44] flex:row g6/6 p0,0,0,0 a:center/start r0
    label [text 110x18] "Pelajari layanan" Plus Jakarta Sans/500/15 tk:{"fill":"color.on-surface"}
    icon [board 16x16] flex:row g0/0 p0,0,0,0 a:center/center r0
      glyph [path 10x8] tk:{"strokeColor":"color.on-surface"}
  Button / Text [board 132x44] flex:row g6/6 p0,0,0,0 a:center/start r0
    label [text 110x18] "Pelajari layanan" Plus Jakarta Sans/500/15 tk:{"typography":"typography.label-sm","fill":"color.on-surface"}
    icon [board 16x16] flex:row g0/0 p0,0,0,0 a:center/center r0
      glyph [path 10x8] tk:{"strokeColor":"color.on-surface"}
=== Badge
Badge [board 55x27] flex:row g0/0 p4,10,4,10 a:center/center tk:{"fill":"color.primary-container","borderRadiusTopLeft":"radius.full","borderRadiusTopRight":"radius.full","borderRadiusBottomRight":"radius.full","borderRadiusBottomLeft":"radius.full"} r9999
  label [text 35x19] "BARU" JetBrains Mono/500/13 tk:{"typography":"typography.eyebrow","fill":"color.primary"}
=== Eyebrow
Eyebrow [board 172x19] flex:row g0/0 p0,0,0,0 a:center/start r0
  label [text 172x19] "IMPLEMENTASI ERPNEXT" JetBrains Mono/500/13 tk:{"typography":"typography.eyebrow","fill":"color.primary"}
=== Step number
Step number [board 16x20] flex:row g0/0 p0,0,0,0 a:center/start r0
  label [text 16x20] "01" JetBrains Mono/400/13 tk:{"typography":"typography.mono-sm","fill":"color.tertiary"}
=== Feature / Row
Feature / Row [board 520x85] flex:row g16/16 p16,0,16,0 a:start/start r0
  icon-chip [board 40x40] flex:row g0/0 p0,0,0,0 a:center/center tk:{"fill":"color.primary-container","borderRadiusTopLeft":"radius.sm","borderRadiusTopRight":"radius.sm","borderRadiusBottomRight":"radius.sm","borderRadiusBottomLeft":"radius.sm"} r6
    icon [board 20x20] r0
      icon-path [path 16x16] tk:{"strokeColor":"color.primary"}
  copy [board 464x53] flex:column g4/4 p0,0,0,0 a:start/start r0
    title [text 464x25] "Stok gudang selalu cocok" Plus Jakarta Sans/600/18 tk:{"typography":"typography.title-md","fill":"color.on-surface"}
    description [text 464x24] "Setiap barang masuk dan keluar tercatat otomatis di ERPNext." Plus Jakarta Sans/400/15 tk:{"typography":"typography.body-sm","fill":"color.on-surface-variant"}
  divider [rectangle 520x1] tk:{"fill":"color.outline"}
=== Card / Default
Card / Default [board 384x179] flex:column g12/12 p24,24,24,24 a:start/start tk:{"fill":"color.surface","borderRadiusTopLeft":"radius.md","borderRadiusTopRight":"radius.md","borderRadiusBottomRight":"radius.md","borderRadiusBottomLeft":"radius.md"} r12
  step-number [board 16x20] flex:row g0/0 p0,0,0,0 a:center/start r0
    label [text 16x20] "01" JetBrains Mono/400/13 tk:{"typography":"typography.mono-sm","fill":"color.tertiary"}
  title [text 125x30] "Dengarkan" Plus Jakarta Sans/600/24 tk:{"typography":"typography.headline-sm","fill":"color.on-surface"}
  description [text 336x57] "Kami datang, melihat cara kerja Anda, dan mencatat masalah yang paling mahal." Plus Jakarta Sans/400/17 tk:{"typography":"typography.body-md","fill":"color.on-surface-variant"}
=== Tab
Tab [board 470x108] r20
  Tab [board 111x48] flex:row g0/0 p4,4,4,4 a:center/start tk:{"strokeColor":"color.primary","borderRadiusTopLeft":"radius.full","borderRadiusTopRight":"radius.full","borderRadiusBottomRight":"radius.full","borderRadiusBottomLeft":"radius.full"} r9999
    body [board 103x40] flex:row g0/0 p10,20,10,20 a:center/start tk:{"fill":"color.primary","borderRadiusTopLeft":"radius.full","borderRadiusTopRight":"radius.full","borderRadiusBottomRight":"radius.full","borderRadiusBottomLeft":"radius.full"} r9999
      label [text 63x18] "ERPNext" Plus Jakarta Sans/500/15 tk:{"typography":"typography.label-sm","fill":"color.on-primary"}
  Tab [board 103x40] flex:row g0/0 p10,20,10,20 a:center/start tk:{"fill":"color.surface","borderRadiusTopLeft":"radius.full","borderRadiusTopRight":"radius.full","borderRadiusBottomRight":"radius.full","borderRadiusBottomLeft":"radius.full","strokeColor":"color.on-surface"} r9999
    label [text 63x18] "ERPNext" Plus Jakarta Sans/500/15 tk:{"typography":"typography.label-sm","fill":"color.on-surface"}
  Tab [board 103x40] flex:row g0/0 p10,20,10,20 a:center/start tk:{"fill":"color.primary","borderRadiusTopLeft":"radius.full","borderRadiusTopRight":"radius.full","borderRadiusBottomRight":"radius.full","borderRadiusBottomLeft":"radius.full"} r9999
    label [text 63x18] "ERPNext" Plus Jakarta Sans/500/15 tk:{"typography":"typography.label-sm","fill":"color.on-primary"}
=== Language switch
Language switch [board 337x104] r20
  Language switch [board 97x44] flex:row g0/0 p4,4,4,4 a:center/start tk:{"strokeColor":"color.primary","borderRadiusTopLeft":"radius.full","borderRadiusTopRight":"radius.full","borderRadiusBottomRight":"radius.full","borderRadiusBottomLeft":"radius.full"} r9999
    body [board 89x36] flex:row g0/0 p2,2,2,2 a:center/start tk:{"strokeColor":"color.outline-strong","borderRadiusTopLeft":"radius.full","borderRadiusTopRight":"radius.full","borderRadiusBottomRight":"radius.full","borderRadiusBottomLeft":"radius.full"} r9999
      segment-id [board 40x32] flex:row g0/0 p0,12,0,12 a:center/center tk:{"fill":"color.primary-container","borderRadiusTopLeft":"radius.full","borderRadiusTopRight":"radius.full","borderRadiusBottomRight":"radius.full","borderRadiusBottomLeft":"radius.full"} r9999
        label [text 16x18] "ID" Plus Jakarta Sans/500/15 tk:{"typography":"typography.label-sm","fill":"color.primary"}
      segment-en [board 45x32] flex:row g0/0 p0,12,0,12 a:center/center tk:{"borderRadiusTopLeft":"radius.full","borderRadiusTopRight":"radius.full","borderRadiusBottomRight":"radius.full","borderRadiusBottomLeft":"radius.full"} r9999
        label [text 21x18] "EN" Plus Jakarta Sans/500/15 tk:{"typography":"typography.label-sm","fill":"color.on-surface-variant"}
  Language switch [board 89x36] flex:row g0/0 p2,2,2,2 a:center/start tk:{"strokeColor":"color.outline-strong","borderRadiusTopLeft":"radius.full","borderRadiusTopRight":"radius.full","borderRadiusBottomRight":"radius.full","borderRadiusBottomLeft":"radius.full"} r9999
    segment-id [board 40x32] flex:row g0/0 p0,12,0,12 a:center/center tk:{"fill":"color.primary-container","borderRadiusTopLeft":"radius.full","borderRadiusTopRight":"radius.full","borderRadiusBottomRight":"radius.full","borderRadiusBottomLeft":"radius.full"} r9999
      label [text 16x18] "ID" Plus Jakarta Sans/500/15 tk:{"typography":"typography.label-sm","fill":"color.primary"}
    segment-en [board 45x32] flex:row g0/0 p0,12,0,12 a:center/center tk:{"borderRadiusTopLeft":"radius.full","borderRadiusTopRight":"radius.full","borderRadiusBottomRight":"radius.full","borderRadiusBottomLeft":"radius.full"} r9999
      label [text 21x18] "EN" Plus Jakarta Sans/500/15 tk:{"typography":"typography.label-sm","fill":"color.on-surface-variant"}
=== Form / Input
Form / Input [board 1236x166] r20
  Form / Input [board 360x106] flex:column g8/8 p0,0,0,0 a:start/start r0
    label [text 87x18] "Nama usaha" Plus Jakarta Sans/500/15 tk:{"typography":"typography.label-sm","fill":"color.on-surface"}
    field [board 360x48] flex:row g0/0 p12,16,12,16 a:center/start tk:{"fill":"color.surface","strokeColor":"color.error","borderRadiusTopLeft":"radius.md","borderRadiusTopRight":"radius.md","borderRadiusBottomRight":"radius.md","borderRadiusBottomLeft":"radius.md"} r12
      placeholder [text 192x29] "cth. Toko Sumber Rejeki" Plus Jakarta Sans/400/17 tk:{"typography":"typography.body-md","fill":"color.muted"}
    helper [board 360x24] flex:row g8/8 p0,0,0,0 a:center/start r0
      alert-icon [board 16x16] r0
        alert-ring [ellipse 14x14] tk:{"strokeColor":"color.error"}
        alert-bar [path 0x4] tk:{"strokeColor":"color.error"}
        alert-dot [ellipse 2x2] tk:{"fill":"color.error"}
      helper-text [text 169x24] "Nama usaha belum diisi." Plus Jakarta Sans/400/15 tk:{"typography":"typography.body-sm","fill":"color.error"}
  Form / Input [board 360x74] flex:column g8/8 p0,0,0,0 a:start/start r0
    label [text 87x18] "Nama usaha" Plus Jakarta Sans/500/15 tk:{"typography":"typography.label-sm","fill":"color.on-surface"}
    field [board 360x48] flex:row g0/0 p12,16,12,16 a:center/start tk:{"fill":"color.surface","strokeColor":"color.primary","borderRadiusTopLeft":"radius.md","borderRadiusTopRight":"radius.md","borderRadiusBottomRight":"radius.md","borderRadiusBottomLeft":"radius.md"} r12
      placeholder [text 192x29] "cth. Toko Sumber Rejeki" Plus Jakarta Sans/400/17 tk:{"typography":"typography.body-md","fill":"color.muted"}
  Form / Input [board 360x74] flex:column g8/8 p0,0,0,0 a:start/start r0
    label [text 87x18] "Nama usaha" Plus Jakarta Sans/500/15 tk:{"typography":"typography.label-sm","fill":"color.on-surface"}
    field [board 360x48] flex:row g0/0 p12,16,12,16 a:center/start tk:{"fill":"color.surface","strokeColor":"color.outline-strong","borderRadiusTopLeft":"radius.md","borderRadiusTopRight":"radius.md","borderRadiusBottomRight":"radius.md","borderRadiusBottomLeft":"radius.md"} r12
      placeholder [text 192x29] "cth. Toko Sumber Rejeki" Plus Jakarta Sans/400/17 tk:{"typography":"typography.body-md","fill":"color.muted"}
=== Media / Frame
Media / Frame [board 640x400] flex:column g0/0 p48,48,48,48 a:center/center tk:{"borderRadiusTopLeft":"radius.lg","borderRadiusTopRight":"radius.lg","borderRadiusBottomRight":"radius.lg","borderRadiusBottomLeft":"radius.lg"} r20
  window [board 544x190] flex:column g0/0 p0,0,0,0 a:stretch/start tk:{"fill":"color.surface","borderRadiusTopLeft":"radius.md","borderRadiusTopRight":"radius.md","borderRadiusBottomRight":"radius.md","borderRadiusBottomLeft":"radius.md"} r12
    window-header [board 544x40] flex:row g6/6 p0,16,0,16 a:center/start tk:{"strokeColor":"color.outline"} r0
      dot [ellipse 8x8] tk:{"fill":"color.outline"}
      dot [ellipse 8x8] tk:{"fill":"color.outline"}
      dot [ellipse 8x8] tk:{"fill":"color.outline"}
      spacer [rectangle 4x4]
      title [text 90x18] "Sistem Anda" Plus Jakarta Sans/500/15 tk:{"typography":"typography.label-sm","fill":"color.on-surface"}
    window-body [board 544x150] flex:column g12/12 p20,20,20,20 a:start/start r0
      skeleton-row [rectangle 384x12] tk:{"fill":"color.surface-sunken","borderRadiusTopLeft":"radius.sm","borderRadiusTopRight":"radius.sm","borderRadiusBottomRight":"radius.sm","borderRadiusBottomLeft":"radius.sm"}
      skeleton-row [rectangle 464x12] tk:{"fill":"color.surface-sunken","borderRadiusTopLeft":"radius.sm","borderRadiusTopRight":"radius.sm","borderRadiusBottomRight":"radius.sm","borderRadiusBottomLeft":"radius.sm"}
      skeleton-row [rectangle 304x12] tk:{"fill":"color.surface-sunken","borderRadiusTopLeft":"radius.sm","borderRadiusTopRight":"radius.sm","borderRadiusBottomRight":"radius.sm","borderRadiusBottomLeft":"radius.sm"}
      status-chip [board 182x30] flex:row g6/6 p6,10,6,10 a:center/start tk:{"fill":"color.surface-sunken","borderRadiusTopLeft":"radius.full","borderRadiusTopRight":"radius.full","borderRadiusBottomRight":"radius.full","borderRadiusBottomLeft":"radius.full"} r9999
        check-icon [path 10x7] tk:{"strokeColor":"color.success"}
        label [text 146x18] "Stok gudang: cocok" Plus Jakarta Sans/500/15 tk:{"typography":"typography.label-sm","fill":"color.on-surface"}
=== Platform tile / states
Platform tile / states [board 718x326] flex:column g28/28 p40,40,40,40 a:start/start tk:{"fill":"color.neutral"} r0
  title [text 383x30] "Platform tile: default, hover, focus" Plus Jakarta Sans/600/24 tk:{"typography":"typography.headline-sm","fill":"color.on-surface"}
  states [board 638x188] flex:row g40/40 p0,0,0,0 a:start/start r0
    state / Default [board 184x182] flex:column g14/14 p0,0,0,0 a:start/start r0
      tile / Frappe dan ERPNext [board 184x148] flex:column g14/14 p24,12,24,12 a:center/center tk:{"borderRadiusTopLeft":"radius.md","borderRadiusTopRight":"radius.md","borderRadiusBottomRight":"radius.md","borderRadiusBottomLeft":"radius.md"} r12
        logo / Frappe [group 40x40]
          svg-path [path 40x40]
        name [text 157x20] "Frappe dan ERPNext" Plus Jakarta Sans/600/16 tk:{"typography":"typography.label-md","fill":"color.on-surface"}
      label [text 55x20] "Default" JetBrains Mono/400/13 tk:{"typography":"typography.mono-sm","fill":"color.muted"}
    state / Hover [board 184x182] flex:column g14/14 p0,0,0,0 a:start/start r0
      tile / Frappe dan ERPNext [board 184x148] flex:column g14/14 p24,12,24,12 a:center/center tk:{"borderRadiusTopLeft":"radius.md","borderRadiusTopRight":"radius.md","borderRadiusBottomRight":"radius.md","borderRadiusBottomLeft":"radius.md"} r12
        logo / Frappe [group 40x40]
          svg-path [path 40x40]
        name [text 157x20] "Frappe dan ERPNext" Plus Jakarta Sans/600/16 tk:{"typography":"typography.label-md","fill":"color.on-surface"}
        button / arrow (top right) [board 24x24] flex:row g0/0 p0,0,0,0 a:center/center r9999
          icon / arrow-up-right [group 10x10]
            svg-path [path 10x10]
            svg-path [path 9x9]
      label [text 39x20] "Hover" JetBrains Mono/400/13 tk:{"typography":"typography.mono-sm","fill":"color.muted"}
    state / Focus (keyboard) [board 190x188] flex:column g14/14 p0,0,0,0 a:start/start r0
      focus-ring [board 190x154] flex:column g0/0 p3,3,3,3 a:start/start tk:{"borderRadiusTopLeft":"radius.md","borderRadiusTopRight":"radius.md","borderRadiusBottomRight":"radius.md","borderRadiusBottomLeft":"radius.md"} r12
        tile / Frappe dan ERPNext [board 184x148] flex:column g14/14 p24,12,24,12 a:center/center tk:{"borderRadiusTopLeft":"radius.md","borderRadiusTopRight":"radius.md","borderRadiusBottomRight":"radius.md","borderRadiusBottomLeft":"radius.md"} r12
          logo / Frappe [group 40x40]
            svg-path [path 40x40]
          name [text 157x20] "Frappe dan ERPNext" Plus Jakarta Sans/600/16 tk:{"typography":"typography.label-md","fill":"color.on-surface"}
          button / arrow (top right) [board 24x24] flex:row g0/0 p0,0,0,0 a:center/center r9999
            icon / arrow-up-right [group 10x10]
              svg-path [path 10x10]
              svg-path [path 9x9]
      label [text 125x20] "Focus (keyboard)" JetBrains Mono/400/13 tk:{"typography":"typography.mono-sm","fill":"color.muted"}
```
