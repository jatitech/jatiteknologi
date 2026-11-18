import type { PlatformCopy } from "../types";

const WHATSAPP_PRICING = "https://developers.facebook.com/docs/whatsapp/pricing";

/** Meta, from the Penpot page (`docs/penpot/platform-meta.md`), with the changes listed in the report. */
export const metaId: PlatformCopy = {
  name: "Meta",
  hero: {
    eyebrow: "Platform · Meta",
    headline: "Chat WhatsApp dan Instagram masuk ke sistem pesanan Anda.",
    lead: "Kami membangun integrasi antara WhatsApp, Instagram, dan Facebook dengan sistem pesanan, stok, dan pelanggan Anda, memakai API publik Meta.",
    chips: ["WhatsApp", "Instagram", "Facebook", "Threads"],
    nonAffiliation:
      "Meta, WhatsApp, Instagram, Facebook, dan Threads adalah merek dagang Meta Platforms, Inc. Jatiteknologi adalah perusahaan independen, bukan Meta Business Partner atau Tech Provider, dan tidak didukung oleh Meta.",
  },
  problems: {
    title: "Masalah yang umum bagi usaha yang berjualan lewat Meta",
    items: [
      {
        title: "Pesanan tersebar di banyak chat",
        description:
          "Pesanan lewat WhatsApp dan DM Instagram dicatat manual di buku atau spreadsheet. Pesanan terlewat dan stok tidak cocok.",
      },
      {
        title: "Biaya per pesan",
        description:
          "WhatsApp Business Platform menagih per pesan sejak 1 Juli 2025, menurut kategori dan negara.",
        source: {
          label: "Sumber: Meta for Developers, WhatsApp pricing, dibaca 17 November 2026",
          href: WHATSAPP_PRICING,
        },
      },
      {
        title: "Batas jendela 24 jam",
        description:
          "Pesan bebas hanya boleh dikirim saat jendela layanan pelanggan 24 jam masih terbuka. Di luar itu, bisnis hanya bisa memakai pesan template.",
        source: {
          label: "Sumber: Meta for Developers, WhatsApp pricing, dibaca 17 November 2026",
          href: WHATSAPP_PRICING,
        },
      },
      {
        title: "Izin aplikasi",
        description:
          "Aplikasi yang dipakai orang tanpa peran di aplikasi itu harus lolos App Review Meta lebih dulu. Prosesnya perlu disiapkan.",
        source: {
          label: "Sumber: Meta for Developers, App Review, dibaca 17 November 2026",
          href: "https://developers.facebook.com/docs/app-review",
        },
      },
    ],
  },
  builds: {
    items: [
      {
        title: "Pesan masuk ke sistem pesanan",
        description:
          "Chat WhatsApp dan DM Instagram menjadi pesanan atau tiket di ERPNext, Odoo, atau sistem Anda.",
      },
      {
        title: "Laporan biaya per kategori",
        description: "Biaya pesan WhatsApp dihitung per kategori, supaya biaya tiap pesanan jelas.",
      },
      {
        title: "Template dan balasan dalam jendela 24 jam",
        description:
          "Balasan bebas saat jendela terbuka, pesan template saat sudah tertutup, sesuai aturan Meta.",
      },
      {
        title: "Persiapan App Review",
        description:
          "Kami menyiapkan aplikasi, izin, dan materi App Review, atau membangun di aplikasi Meta milik Anda.",
      },
    ],
  },
  extra: {
    eyebrow: "Per aplikasi",
    title: "Apa yang bisa dihubungkan per aplikasi.",
    items: [
      {
        title: "WhatsApp",
        description: "Chat, pesan template, dan status pesanan.",
      },
      {
        title: "Instagram",
        description: "DM dan komentar untuk akun bisnis.",
      },
      {
        title: "Facebook",
        description: "Pesan Halaman, komentar, dan Lead Ads.",
      },
    ],
  },
  flow: {
    layer: "Integrasi Jatiteknologi",
    system: "ERPNext, Odoo, atau sistem Anda",
    notes: [
      "Kami memakai API publik Meta dengan izin yang Anda berikan.",
      "Izin akses dari Anda bisa dicabut kapan saja.",
      "Setiap pesan yang diteruskan punya catatan yang bisa diperiksa.",
    ],
  },
  limits: {
    eyebrow: "Batasan yang perlu Anda tahu",
    title: "Hal yang menentukan hasilnya.",
    items: [
      {
        title: "Pesan berbayar menurut kategori",
        description:
          "Pesan dari bisnis ke pelanggan dikenai biaya menurut kategori. Kami hitung perkiraan biayanya sebelum membangun.",
        source: {
          label: "Sumber: Meta for Developers, WhatsApp pricing, dibaca 17 November 2026",
          href: WHATSAPP_PRICING,
        },
      },
      {
        title: "Template di luar jendela 24 jam",
        description:
          "Di luar jendela 24 jam, bisnis memakai pesan template yang mengikuti aturan Meta.",
        source: {
          label: "Sumber: Meta for Developers, WhatsApp pricing, dibaca 17 November 2026",
          href: WHATSAPP_PRICING,
        },
      },
      {
        title: "Batas panggilan dan App Review",
        description:
          "Graph API membatasi panggilan per jam menurut jumlah pengguna aplikasi. Aplikasi untuk publik perlu App Review.",
        source: {
          label: "Sumber: Meta for Developers, Rate limiting, dibaca 17 November 2026",
          href: "https://developers.facebook.com/docs/graph-api/overview/rate-limiting",
        },
      },
    ],
  },
  experience: {
    paragraphs: [
      "Pendiri kami bekerja di bidang perangkat lunak secara profesional sejak 2016. Kami belum punya studi kasus Meta.",
      "Kami mulai dari satu alur kecil, misalnya chat WhatsApp menjadi pesanan, supaya Anda bisa menilai hasilnya sebelum melanjutkan.",
    ],
  },
};
