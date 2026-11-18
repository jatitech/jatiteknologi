import type { PlatformCopy } from "../types";

/** TikTok Shop, from the Penpot page (`docs/penpot/platform-tiktok-shop.md`), with the changes listed in the report. */
export const tiktokShopId: PlatformCopy = {
  name: "TikTok Shop",
  hero: {
    eyebrow: "Platform · TikTok Shop",
    headline: "Pesanan TikTok Shop masuk ke sistem Anda, tanpa input ulang.",
    lead: "Kami membangun integrasi pesanan, stok, dan laporan untuk penjual TikTok Shop, lewat API TikTok Shop bila akses disetujui.",
    nonAffiliation:
      "Jatiteknologi adalah perusahaan independen dan tidak berafiliasi dengan TikTok Shop.",
  },
  problems: {
    title: "Masalah yang umum bagi penjual TikTok Shop",
    items: [
      {
        title: "Biaya per pesanan",
        description:
          "Sejak 11 Agustus 2025, TikTok Shop menarik Rp1.250 per pesanan. Biaya ini ikut menggeser margin.",
        source: {
          label: "Sumber: Bisnis.com, 3 Agustus 2025",
          href: "https://teknologi.bisnis.com/read/20250803/266/1898840/tokopedia-tiktok-shop-tiru-shopee-tarik-biaya-rp1250-per-pesanan-mulai-11-agustus",
        },
      },
      {
        title: "Pesanan datang bergelombang",
        description:
          "Saat live atau video ramai, pesanan masuk sekaligus. Pencatatan manual tertinggal dan stok bisa terjual dua kali.",
      },
      {
        title: "Stok beda kanal",
        description: "Stok TikTok Shop, Shopee, dan toko sendiri berjalan sendiri-sendiri.",
      },
      {
        title: "Untung bersih sulit dibandingkan",
        description:
          "Biaya platform berbeda di tiap kanal, jadi sulit tahu kanal mana yang paling menguntungkan.",
      },
    ],
  },
  builds: {
    items: [
      {
        title: "Hitung biaya per pesanan",
        description: "Biaya platform dihitung per pesanan, supaya margin tiap pesanan jelas.",
      },
      {
        title: "Pesanan masuk ke ERP",
        description: "Pesanan TikTok Shop tercatat otomatis di sistem Anda.",
      },
      {
        title: "Stok satu sumber",
        description: "Stok dari ERP dibaca oleh TikTok Shop dan kanal lain.",
      },
      {
        title: "Untung bersih per kanal",
        description: "Bandingkan untung bersih TikTok Shop, Shopee, dan toko sendiri.",
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
    link: { label: "Lihat juga halaman Shopee →", to: "shopee" },
  },
  flow: {
    layer: "Integrasi Jatiteknologi",
    system: "ERPNext, Odoo, atau akuntansi",
    notes: [
      "Kami memakai API TikTok Shop dengan izin yang Anda berikan.",
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
          "Akses ke data toko lewat API TikTok Shop bergantung pada persetujuan dari TikTok Shop dan izin pemilik toko.",
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
      "Pendiri kami bekerja di bidang perangkat lunak secara profesional sejak 2016. Kami belum punya studi kasus TikTok Shop.",
      "Kami mulai dari satu alur kecil, misalnya pesanan masuk ke ERP, supaya Anda bisa menilai hasilnya sebelum melanjutkan.",
    ],
  },
};
