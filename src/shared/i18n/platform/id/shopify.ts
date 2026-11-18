import type { PlatformCopy } from "../types";

/** Shopify, from the Penpot page (`docs/penpot/platform-shopify.md`), with the changes listed in the report. */
export const shopifyId: PlatformCopy = {
  name: "Shopify",
  hero: {
    eyebrow: "Platform · Shopify",
    headline: "Toko Shopify yang tersambung ke stok, pembayaran, dan keuangan.",
    lead: "Kami membangun aplikasi, integrasi, dan penyesuaian tema untuk toko Shopify, memakai API Shopify.",
    nonAffiliation:
      "Jatiteknologi adalah perusahaan independen dan tidak berafiliasi dengan Shopify.",
  },
  problems: {
    title: "Masalah yang umum di Shopify",
    items: [
      {
        title: "Pembayaran lokal",
        description:
          "Xendit punya panduan menghubungkan Shopify untuk merchant di Indonesia. Metode bayar dan rekonsiliasi tiap usaha tetap perlu disesuaikan.",
        source: {
          label: "Sumber: Xendit Help Center, diperbarui 10 Oktober 2022",
          href: "https://help.xendit.co/hc/en-us/articles/360028907851-How-can-I-integrate-my-Shopify-with-Xendit",
        },
      },
      {
        title: "Batas API",
        description:
          "Admin GraphQL API Shopify memakai batas berdasarkan biaya kueri, yang dihitung per paket. Sinkronisasi besar harus dirancang agar tidak terkena batas.",
        source: {
          label: "Sumber: shopify.dev, Shopify API limits, dibaca 17 November 2026",
          href: "https://shopify.dev/docs/api/usage/limits",
        },
      },
      {
        title: "Stok dan pesanan di dua sistem",
        description: "Pesanan Shopify harus masuk ke ERP, dan stok dari ERP harus kembali ke toko.",
      },
      {
        title: "Tampilan dan alur khusus",
        description:
          "Halaman produk, tema, atau alur pesanan yang tidak ada di tema standar butuh kode tema atau aplikasi sendiri.",
      },
    ],
  },
  builds: {
    items: [
      {
        title: "Rekonsiliasi pembayaran",
        description: "Pembayaran dari penyedia lokal dicocokkan dengan pesanan.",
      },
      {
        title: "Sinkronisasi yang tahan batas API",
        description: "Data dikirim bertahap lewat antrean, supaya tidak terkena batas biaya kueri.",
      },
      {
        title: "Sinkronisasi pesanan dan stok",
        description: "Pesanan masuk ke ERP, stok kembali ke Shopify.",
      },
      {
        title: "Tema dan aplikasi kustom",
        description: "Halaman, komponen, atau fitur khusus untuk toko Anda.",
      },
    ],
  },
  flow: {
    layer: "Integrasi Jatiteknologi",
    system: "ERPNext, Odoo, atau akuntansi",
    notes: [
      "Kami memakai API Shopify dengan akses yang Anda berikan.",
      "Izin akses dari Anda bisa dicabut kapan saja.",
      "Setiap sinkronisasi punya catatan yang bisa diperiksa.",
    ],
  },
  limits: {
    eyebrow: "Batasan yang perlu Anda tahu",
    title: "Hal yang menentukan hasilnya.",
    items: [
      {
        title: "Batas biaya kueri API",
        description: "Sinkronisasi besar dibatasi biaya kueri, jadi data dikirim bertahap.",
      },
      {
        title: "Peninjauan aplikasi",
        description:
          "Hanya aplikasi yang dibagikan ke banyak toko yang perlu ditinjau Shopify. Aplikasi khusus untuk satu toko tidak perlu.",
        source: {
          label: "Sumber: shopify.dev, distribusi aplikasi, dibaca 17 November 2026",
          href: "https://shopify.dev/docs/apps/launch/distribution",
        },
      },
      {
        title: "Izin akses data",
        description: "Aplikasi hanya bisa melihat data yang Anda izinkan saat memasangnya.",
      },
    ],
  },
  experience: {
    paragraphs: [
      "Pendiri kami bekerja di bidang perangkat lunak secara profesional sejak 2016. Kami belum punya studi kasus Shopify.",
      "Kami mulai dari satu alur kecil, misalnya sinkronisasi stok, supaya Anda bisa menilai hasilnya sebelum melanjutkan.",
    ],
  },
};
