import type { PlatformCopy } from "../types";

/** Odoo, from the Penpot page (`docs/penpot/platform-odoo.md`), with the changes listed in the report. */
export const odooId: PlatformCopy = {
  name: "Odoo",
  hero: {
    eyebrow: "Platform · Odoo",
    headline: "Rencanakan naik versi Odoo, meski sudah dikustomisasi.",
    lead: "Kami membangun modul kustom, integrasi, dan migrasi data untuk Odoo, lewat cara pengembangan dan API yang Odoo sediakan.",
    nonAffiliation: "Jatiteknologi adalah perusahaan independen dan tidak berafiliasi dengan Odoo.",
  },
  problems: {
    title: "Masalah yang umum di Odoo",
    items: [
      {
        title: "Naik versi dengan modul kustom",
        description:
          "Odoo menjelaskan bahwa database dengan modul kustom butuh langkah tambahan saat upgrade. Modul harus diperbaiki dan diuji di versi baru.",
        source: {
          label:
            "Sumber: Dokumentasi Odoo 18.0, Upgrade a customized database, dibaca 17 November 2026",
          href: "https://www.odoo.com/documentation/18.0/developer/howtos/upgrade_custom_db.html",
        },
      },
      {
        title: "Faktur pajak Coretax",
        description:
          "Modul lokalisasi Indonesia dari Odoo membuat berkas XML untuk Coretax. Data pelanggan dan alur faktur Anda tetap perlu dicek dan disesuaikan.",
        source: {
          label: "Sumber: Dokumentasi Odoo 18.0, Indonesia, dibaca 17 November 2026",
          href: "https://www.odoo.com/documentation/18.0/applications/finance/fiscal_localizations/indonesia.html",
        },
      },
      {
        title: "Pesanan marketplace diketik ulang",
        description: "Pesanan dan stok dari marketplace harus masuk ke Odoo tanpa input manual.",
      },
      {
        title: "Pindah dari atau ke ERPNext",
        description:
          "Memindahkan data master, stok awal, dan transaksi berjalan antar dua sistem butuh rencana dan uji coba.",
      },
    ],
  },
  builds: {
    items: [
      {
        title: "Modul kustom yang siap naik versi",
        description: "Fitur khusus dalam modul terpisah, diuji ulang di tiap versi baru.",
      },
      {
        title: "Faktur dan laporan",
        description: "Ekspor faktur Coretax dicek dan disesuaikan dengan data Anda.",
      },
      {
        title: "Integrasi marketplace dan pembayaran",
        description: "Pesanan, stok, dan pembayaran masuk ke Odoo lewat API.",
      },
      {
        title: "Migrasi data",
        description:
          "Pindah ke atau dari ERPNext secara bertahap, dengan data lama tetap bisa dibuka.",
      },
    ],
  },
  extra: {
    eyebrow: "Odoo atau ERPNext?",
    title: "Kami bekerja dengan keduanya.",
    items: [
      {
        title: "Anda sudah memakai Odoo",
        description:
          "Kami bantu mengembangkan, menghubungkan, dan merawatnya. Anda tidak perlu pindah.",
      },
      {
        title: "Anda belum memutuskan",
        description:
          "Kami tunjukkan perbedaan cara kerja keduanya dengan data Anda sendiri, tanpa menjatuhkan salah satunya.",
      },
      {
        title: "Anda ingin pindah",
        description: "Kami rencanakan migrasi bertahap, dari Odoo ke ERPNext atau sebaliknya.",
      },
    ],
  },
  flow: {
    layer: "Modul dan integrasi Jatiteknologi",
    system: "Marketplace, pembayaran, ERP lain",
    notes: [
      "Modul mengikuti cara pengembangan Odoo, bukan mengubah kode inti.",
      "Kunci API dibuat dengan izin yang Anda atur dan bisa dicabut.",
      "Data tetap berada di sistem Anda.",
    ],
  },
  limits: {
    eyebrow: "Batasan yang perlu Anda tahu",
    title: "Hal yang menentukan hasilnya.",
    items: [
      {
        title: "Modul kustom ikut versi",
        description: "Setiap versi mayor Odoo bisa mengubah kode. Modul kustom perlu diuji ulang.",
      },
      {
        title: "Cara hosting memengaruhi pilihan",
        description:
          "Odoo bisa dijalankan di Odoo Online, Odoo.sh, atau server sendiri. Di Odoo Online, modul kustom berisi kode Python tidak bisa dipasang.",
        source: {
          label:
            "Sumber: Dokumentasi Odoo 18.0, Upgrade a customized database, dibaca 17 November 2026",
          href: "https://www.odoo.com/documentation/18.0/developer/howtos/upgrade_custom_db.html",
        },
      },
      {
        title: "Fitur edisi Enterprise",
        description: "Sebagian fitur Odoo hanya ada di edisi Enterprise.",
      },
    ],
  },
  experience: {
    paragraphs: [
      "Pendiri kami bekerja di bidang perangkat lunak secara profesional sejak 2016.",
      "Kami belum punya studi kasus Odoo. Kami mulai dari satu alur kecil yang bisa Anda uji sebelum melanjutkan.",
    ],
  },
};
