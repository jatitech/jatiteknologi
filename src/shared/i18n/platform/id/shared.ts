import type { PlatformShared } from "../types";

/** Indonesian copy that every platform page shares. Source: `docs/penpot/platform-frappe.md`, `docs/platform-pages.md`. */
export const platformSharedId: PlatformShared = {
  breadcrumb: { label: "Jalur halaman", home: "Beranda" },
  actions: { email: "Kirim email" },
  problems: { eyebrow: "Masalah umum" },
  builds: {
    eyebrow: "Solusi",
    title: "Yang bisa kami bangun",
    description: "Satu pekerjaan untuk setiap masalah di atas.",
  },
  flow: {
    eyebrow: "Cara kerjanya",
    title: "Dari platform ke sistem Anda, lewat satu lapisan yang kami rawat.",
  },
  experience: {
    eyebrow: "Pengalaman kami",
    title: "Terus terang soal pengalaman kami.",
    processLink: "Cara kami bekerja: dengarkan, rancang, bangun bertahap, dampingi →",
  },
  terms: {
    eyebrow: "Biaya, akses API, dan data",
    title: "Soal biaya, akses API, dan data.",
    items: [
      {
        title: "Biaya",
        description:
          "Biaya pekerjaan kami ditulis per proyek sebelum mulai. Biaya platform Anda bayar langsung ke platform.",
      },
      {
        title: "Akses API",
        description:
          "Platform bisa mengubah API atau aturannya. Perawatan integrasi kami sediakan sebagai layanan terpisah.",
      },
      {
        title: "Data",
        description:
          "Data tetap milik Anda, dan Anda bisa mencabut izin aplikasi dari pengaturan toko atau akun kapan saja.",
      },
    ],
  },
  closing: {
    headline: "Mulai dari satu alur yang paling memakan waktu.",
    disclaimer:
      "Frappe, ERPNext, Odoo, Meta, WhatsApp, Instagram, Facebook, Threads, Shopify, Shopee, TikTok, dan TikTok Shop adalah merek dagang milik pemiliknya masing-masing. Jatiteknologi adalah perusahaan independen dan tidak berafiliasi dengan, didukung, atau disponsori oleh pemilik merek tersebut.",
  },
};
