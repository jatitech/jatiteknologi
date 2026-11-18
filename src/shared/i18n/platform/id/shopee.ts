import type { PlatformCopy } from "../types";

/** Shopee, from the Penpot page (`docs/penpot/platform-shopee.md`), with the changes listed in the report. */
export const shopeeId: PlatformCopy = {
  name: "Shopee",
  hero: {
    eyebrow: "Platform · Shopee",
    headline: "Hitung untung bersih tiap pesanan Shopee, dan jaga stok tetap satu.",
    lead: "Kami membangun sinkronisasi pesanan dan stok serta laporan margin untuk penjual Shopee, lewat Shopee Open Platform bila akses disetujui.",
    nonAffiliation:
      "Jatiteknologi adalah perusahaan independen dan tidak berafiliasi dengan Shopee.",
  },
  problems: {
    title: "Masalah yang umum bagi penjual Shopee",
    items: [
      {
        title: "Biaya per pesanan naik",
        description:
          "Sejak 20 Juli 2025, Shopee mengenakan Biaya Proses Pesanan Rp1.250 per pesanan selesai, di luar biaya lain. Margin tiap pesanan ikut berubah.",
        source: {
          label: "Sumber: Bisnis.com, 2 Juli 2025",
          href: "https://teknologi.bisnis.com/read/20250702/266/1889692/shopee-kenakan-biaya-rp1250-per-transaksi-kepada-pedagang-berlaku-mulai-20-juli",
        },
      },
      {
        title: "Stok terjual dua kali",
        description:
          "Stok yang sama dijual di beberapa kanal. Satu pesanan yang terlambat dicatat membuat stok minus.",
      },
      {
        title: "Dana cair tidak sama dengan harga",
        description:
          "Biaya dipotong sebelum dana cair. Mencocokkannya dengan pesanan satu per satu memakan waktu.",
      },
      {
        title: "Beberapa toko, beberapa dasbor",
        description:
          "Penjual dengan lebih dari satu toko harus membuka tiap dasbor untuk melihat pesanan.",
      },
    ],
  },
  builds: {
    items: [
      {
        title: "Laporan margin per pesanan",
        description: "Harga, biaya platform, dan modal dihitung menjadi untung bersih.",
      },
      {
        title: "Sinkronisasi pesanan dan stok",
        description: "Pesanan Shopee masuk ke ERP, stok ERP kembali ke Shopee.",
      },
      {
        title: "Rekonsiliasi pencairan dana",
        description: "Dana yang cair dicocokkan dengan pesanan dan biaya.",
      },
      {
        title: "Dasbor beberapa toko",
        description: "Pesanan dari semua toko dalam satu tampilan.",
      },
    ],
  },
  extra: {
    eyebrow: "Stok satu sumber",
    title: "Satu stok untuk semua kanal.",
    items: [
      {
        title: "Stok di ERP",
        description: "ERPNext atau Odoo menyimpan angka stok utama.",
      },
      {
        title: "Kanal membaca dari sana",
        description: "Shopee, TikTok Shop, dan toko sendiri memakai angka yang sama.",
      },
      {
        title: "Pesanan tercatat sekali",
        description: "Setiap pesanan mengurangi stok sekali, apa pun kanalnya.",
      },
    ],
    link: { label: "Lihat juga halaman TikTok Shop →", to: "tiktok-shop" },
  },
  flow: {
    layer: "Integrasi Jatiteknologi",
    system: "ERPNext, Odoo, atau akuntansi",
    notes: [
      "Kami memakai Shopee Open Platform dengan izin yang Anda berikan.",
      "Izin akses dari Anda bisa dicabut kapan saja.",
      "Setiap sinkronisasi punya catatan yang bisa diperiksa.",
    ],
  },
  limits: {
    eyebrow: "Batasan yang perlu Anda tahu",
    title: "Hal yang menentukan hasilnya.",
    items: [
      {
        title: "Akses butuh persetujuan",
        description:
          "Akses ke data toko lewat Shopee Open Platform bergantung pada persetujuan dari Shopee dan izin pemilik toko.",
      },
      {
        title: "Aturan dan biaya berubah",
        description:
          "Biaya dan kebijakan bisa berubah. Kami menulis tanggal pada tiap angka di halaman ini.",
      },
      {
        title: "Batas panggilan API",
        description:
          "Platform membatasi jumlah panggilan API, jadi sinkronisasi dirancang bertahap.",
      },
    ],
  },
  experience: {
    paragraphs: [
      "Pendiri kami bekerja di bidang perangkat lunak secara profesional sejak 2016. Kami belum punya studi kasus Shopee.",
      "Kami mulai dari satu alur kecil, misalnya stok satu sumber, supaya Anda bisa menilai hasilnya sebelum melanjutkan.",
    ],
  },
};
