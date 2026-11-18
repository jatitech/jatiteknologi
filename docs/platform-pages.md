# Platform pages: copy, sources, and ship-gate

Indonesian copy as designed in Penpot (pages `Platform / <name>`, each with a 1440 and a 360 board). Facts and sources were checked on 17 November 2026. Section order: hero, problems, solutions, [extra], how it works, limits, experience, costs/API/data, closing CTA, footer.

## Ship-gate (read before publishing)

The founder asked for real brand logos and brand-colour tiles. The design uses them. The brand owners' own rules say otherwise for several of them, so nothing here goes public until each item below is closed.

| Brand | What the design uses | What the owner's rules say (checked 17 November 2026) | Before publishing | Request sent / owner / fallback date |
|---|---|---|---|---|
| Frappe, ERPNext | Simple Icons glyph in brand colour; white on a gradient in the page hero | Frappe's policy allows the logo to describe your services, but forbids "modify, distort, recolor, recreate" (docs.frappe.io, license-and-trademark). A white or gradient version is a recolour even with the official file. | Official file from frappe.io/design/identity, unmodified, on a plain tile. No recolour, no gradient. | not sent / founder / launch |
| Odoo | Simple Icons glyph, white on a gradient in the hero | Standard logo only "in the colors provided", no recreating; partner logos for official partners only (odoo.com/page/brand-assets). | Odoo's official file in its own colours, or its inverted file on `#714B67`; or text only. | not sent / founder / launch |
| Meta | Simple Icons glyph, white on a gradient in the hero | "All usage of the Meta logo requires approval" (meta.com/brand/resources/meta/company-brand). | Written approval, or text only. | not sent / founder / launch |
| Shopify | Simple Icons glyph, recoloured, gradient hero | Use "must be expressly authorized in writing"; no gradients (shopify.com/brand-assets). | Written approval, or text only. | not sent / founder / launch |
| Shopee | Simple Icons glyph, recoloured, gradient hero | No public brand policy found; treat as permission needed. | Written approval, or text only. | not sent / founder / launch |
| TikTok Shop | The TikTok glyph with cyan and pink offsets, which rebuilds TikTok's full-colour mark; the page is about TikTok Shop, which has its own mark | "You may not use TikTok logos … without our prior written permission" (developers.tiktok.com); brand rules at tiktokbrandbook.com. | The TikTok Shop mark, official file, with written permission; or text only. | not sent / founder / launch |
| WhatsApp, Instagram, Threads icons | Not used (text chips only) | Allowed without a permission request only as the official files with colours unchanged; no Facebook "f"; never combined into one lock-up (meta.com/brand/resources). | If icons are added later, use official files only, each smaller than the H1 text. | n/a |
| Tile and hero text contrast | Brand-tint tiles with `on-surface` labels, white logos on gradients | Text needs 4.5:1; logos are exempt but graphics should reach 3:1. Shopee and TikTok tints and the hover state still need a measured check. | Measure every tile label on its tint, and the hover state. White on gradient stops measured: 3.07 to 21:1. | open |

Any row without a reply by launch ships as text only.

Text fallback for any tile: the brand name in `label-md`, no logo, same tint. Other rules:
- Never write "partner", "mitra", "resmi", "Tech Provider", or "Business Partner" about ourselves next to a platform name. The Meta hero note says what we are not.
- Brand names exactly: WhatsApp, Instagram, Facebook, Threads, TikTok Shop, Odoo. Never WA, IG, FB.
- No Facebook "f" and no combined lock-up of app icons.
- Date every fee or limit figure. Re-open the source on build day.
- The founder has not confirmed hands-on experience with any platform API except the Frappe stack. Each page says "Kami belum punya studi kasus [platform]". Replace only with a founder-approved sentence.
- "Frappe Cloud" and "Odoo.sh" are product names used descriptively.
- Unverified and left out on purpose: Shopee escrow APIs, Shopify checkout.liquid dates, Threads API scope, Tokopedia API version notes, whether a Shopee or TikTok Shop seller can register their own in-house app (so the pages say the seller can revoke the app's permission, not that the seller holds the keys). Still to source: Instagram and Facebook comments and private replies, Messenger Platform Page messages, odoo.com/pricing for Enterprise, the current Xendit Shopify app listing (the cited help article is from 2022), and seller-education pages for the Shopee and TikTok Shop fees (cited articles are from 2025; Shopee changed category fees from January 2026).

## Sources

- HubSpot rate limits and WhatsApp notes were checked but are no longer used (HubSpot page replaced by Meta on 17 November 2026).
- Odoo: documentation 18.0, "Upgrade a customized database" and "Indonesia" (module `l10n_id_efaktur_coretax`, XML for Coretax).
- Shopify: shopify.dev, "API usage limits" (GraphQL Admin API cost-based limits by plan). Xendit Help Center, "How can I integrate my Shopify with Xendit?" (updated 10 October 2022; Indonesia and Philippines).
- Shopee: Bisnis.com, 2 July 2025, Biaya Proses Pesanan Rp1.250 from 20 July 2025.
- TikTok Shop and Tokopedia: Bisnis.com, 3 August 2025, Rp1.250 per order from 11 August 2025 (headline of the linked report).
- Meta: developers.facebook.com/docs/whatsapp/pricing (per-message billing from 1 July 2025; non-template messages only in an open 24-hour window); developers.facebook.com/docs/app-review (apps used by anyone without a role need App Review); developers.facebook.com/docs/graph-api/overview/rate-limiting (hourly app limit scales with users).
- Frappe: docs.frappe.io/legal/others/license-and-trademark (services and "Built for ERPNext" allowed; recolouring not).
- Odoo Online: documentation 19.0, "Upgrade a customized database": custom modules containing Python cannot be installed on Odoo Online.
- Shopify distribution: shopify.dev/docs/apps/launch/distribution (only public distribution needs Shopify's review).

## Shared copy

Disclaimer: Frappe, ERPNext, Odoo, Meta, WhatsApp, Instagram, Facebook, Threads, Shopify, Shopee, TikTok, dan TikTok Shop adalah merek dagang milik pemiliknya masing-masing. Jatiteknologi adalah perusahaan independen dan tidak berafiliasi dengan, didukung, atau disponsori oleh pemilik merek tersebut.

Costs, API access, and data:
- Biaya: Biaya pekerjaan kami ditulis per proyek sebelum mulai. Biaya platform Anda bayar langsung ke platform.
- Akses API: Platform bisa mengubah API atau aturannya. Perawatan integrasi kami sediakan sebagai layanan terpisah.
- Data: Data tetap milik Anda, dan Anda bisa mencabut izin aplikasi dari pengaturan toko atau akun kapan saja.

## Frappe dan ERPNext

- H1: ERPNext yang mengikuti cara kerja Anda, bukan sebaliknya.
- Lead: Kami membangun aplikasi kustom, integrasi, dan perawatan di atas Frappe dan ERPNext. Kode, data, dan dokumentasinya tetap milik Anda.
- Problems 01 to 04: kebutuhan yang tidak ada di ERPNext standar; pajak dan laporan khas Indonesia; naik versi tanpa takut; hosting dan cadangan.
- Builds 01 to 04 (same order, so item N answers problem N): aplikasi Frappe kustom; laporan dan dokumen cetak; pembaruan versi terencana; hosting dan perawatan.
- Variant section "Open source, milik Anda": perangkat lunak sumber terbuka; data bisa dibawa pergi; hosting pilihan Anda.
- Experience: "Pendiri kami bekerja di bidang perangkat lunak secara profesional sejak 2016. Kami membangun di atas ERPNext dan Frappe yang terbuka." (approved wording, BRAND.md Claims)

## Odoo

- H1: Rencanakan naik versi Odoo, meski sudah dikustomisasi.
- Problems: naik versi dengan modul kustom (Odoo docs 18.0); faktur pajak Coretax (Odoo docs 18.0); pesanan marketplace diketik ulang; pindah dari atau ke ERPNext.
- Extra "Odoo atau ERPNext?": sudah memakai Odoo; belum memutuskan; ingin pindah.
- Limits: modul kustom ikut versi; cara hosting memengaruhi pilihan; fitur Enterprise berlangganan.

## Meta

- Eyebrow: PLATFORM · META. Chips: WhatsApp, Instagram, Facebook, Threads (text only).
- H1: Chat WhatsApp dan Instagram masuk ke sistem pesanan Anda.
- Hero note: Meta, WhatsApp, Instagram, Facebook, dan Threads adalah merek dagang Meta Platforms, Inc. Jatiteknologi adalah perusahaan independen, bukan Meta Business Partner atau Tech Provider, dan tidak didukung oleh Meta.
- Problems: pesanan tersebar di banyak chat; biaya per pesan (WhatsApp pricing); batas jendela 24 jam (WhatsApp pricing); izin aplikasi (App Review).
- Extra "Apa yang bisa dihubungkan per aplikasi": WhatsApp (chat, template, status pesanan); Instagram (DM dan komentar untuk akun bisnis); Facebook (pesan Halaman, komentar, Lead Ads). Threads is left out of the matrix until its API scope is verified.
- Limits: pesan berbayar menurut kategori; template di luar jendela 24 jam; batas panggilan dan App Review.

## Shopify

- H1: Toko Shopify yang tersambung ke stok, pembayaran, dan keuangan.
- Problems: pembayaran lokal (Xendit Help Center); batas API (shopify.dev); stok dan pesanan di dua sistem; tampilan dan alur khusus.
- Limits: batas biaya kueri API; peninjauan aplikasi publik; aturan checkout.
- First mention of "Shopify" links to shopify.com in the built page.

## Shopee

- H1: Hitung untung bersih tiap pesanan Shopee, dan jaga stok tetap satu.
- Problems: biaya per pesanan naik (Bisnis.com, 2 Juli 2025); stok terjual dua kali; dana cair tidak sama dengan harga; beberapa toko, beberapa dasbor.
- Extra "Satu stok untuk semua kanal" with a link to the TikTok Shop page.

## TikTok Shop

- H1: Pesanan TikTok Shop masuk ke sistem Anda, tanpa input ulang.
- Problems: biaya per pesanan (Bisnis.com, 3 Agustus 2025); pesanan datang bergelombang; stok beda kanal; untung bersih sulit dibandingkan.
- Extra "Satu stok untuk semua kanal" with a link to the Shopee page.

Problems and builds are numbered 01 to 04 on every page and answer each other in order (the merge into paired rows was not done). Fee statements are worded as history with a date ("Sejak 20 Juli 2025…", "Sejak Agustus 2025…"). Claims that have no primary source are written as conditions ("Jika Anda berjualan lewat live…").

All pages: sections after "Pengalaman kami" are "Biaya, akses API, dan data" and the closing CTA "Mulai dari satu alur yang **paling memakan waktu.**". The four-step process lives on the homepage; each page links to it in one line.
