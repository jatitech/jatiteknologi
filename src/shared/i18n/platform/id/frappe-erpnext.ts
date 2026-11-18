import type { PlatformCopy } from "../types";

/** Frappe dan ERPNext, word for word from the Penpot page (`docs/penpot/platform-frappe.md`). */
export const frappeErpnextId: PlatformCopy = {
  name: "Frappe dan ERPNext",
  hero: {
    eyebrow: "Platform · Frappe dan ERPNext",
    headline: "ERPNext yang mengikuti cara kerja Anda, bukan sebaliknya.",
    lead: "Kami membangun aplikasi kustom, integrasi, dan perawatan di atas Frappe dan ERPNext. Kode, data, dan dokumentasinya tetap milik Anda.",
    nonAffiliation:
      "Jatiteknologi adalah perusahaan independen dan tidak berafiliasi dengan Frappe Technologies.",
  },
  problems: {
    title: "Masalah yang umum di ERPNext",
    items: [
      {
        title: "Kebutuhan yang tidak ada di ERPNext standar",
        description:
          "Alur pesanan, formulir, atau laporan khusus bisa memaksa orang mengubah kode inti, dan itu mempersulit pembaruan.",
      },
      {
        title: "Pajak dan laporan khas Indonesia",
        description:
          "Faktur pajak dan laporan keuangan di Indonesia punya format sendiri. ERPNext perlu disesuaikan dengan cara usaha Anda mencatat.",
      },
      {
        title: "Naik versi tanpa takut",
        description:
          "Versi baru bisa merusak aplikasi kustom. Aplikasi yang terpisah dari kode inti dan diuji lebih dulu jauh lebih aman.",
      },
      {
        title: "Hosting dan cadangan",
        description:
          "Server yang mati atau data yang hilang menghentikan usaha. Sistem butuh hosting, cadangan, dan cara memulihkannya.",
      },
    ],
  },
  builds: {
    items: [
      {
        title: "Aplikasi Frappe kustom",
        description:
          "Modul, formulir, dan alur khusus dalam aplikasi terpisah, bukan perubahan di kode inti.",
      },
      {
        title: "Laporan dan dokumen cetak",
        description: "Faktur, laporan, dan ekspor pajak dengan format usaha Anda.",
      },
      {
        title: "Pembaruan versi terencana",
        description:
          "Versi baru diuji di salinan dulu, lalu dipasang sesuai jadwal. Dokumentasi ikut diperbarui.",
      },
      {
        title: "Hosting dan perawatan",
        description: "Server, cadangan, dan cara memulihkannya, ditulis dalam dokumentasi.",
      },
    ],
  },
  flow: {
    layer: "Aplikasi kustom Jatiteknologi",
    system: "Marketplace, pembayaran, sistem lain",
    notes: [
      "Aplikasi kustom terpisah dari kode inti ERPNext.",
      "Kode tersimpan di repositori milik Anda.",
      "Dokumentasi diserahkan bersama setiap pekerjaan.",
    ],
  },
  limits: {
    eyebrow: "Open source, milik Anda",
    title: "Tanpa kunci, tanpa kejutan.",
    items: [
      {
        title: "Perangkat lunak sumber terbuka",
        description:
          "Frappe dan ERPNext berlisensi terbuka. Anda bisa menjalankannya di server sendiri.",
      },
      {
        title: "Data bisa dibawa pergi",
        description: "Data bisa diekspor kapan saja. Kode kustom tinggal di repositori Anda.",
      },
      {
        title: "Hosting pilihan Anda",
        description: "Server sendiri, penyedia cloud, atau Frappe Cloud. Kami bantu memilih.",
      },
    ],
  },
  experience: {
    paragraphs: [
      "Pendiri kami bekerja di bidang perangkat lunak secara profesional sejak 2016. Kami membangun di atas ERPNext dan Frappe yang terbuka.",
      "Kami belum punya studi kasus klien. Karena itu kami menawarkan awal yang kecil dan bertahap, supaya Anda bisa menilai hasilnya sebelum melanjutkan.",
    ],
  },
};
