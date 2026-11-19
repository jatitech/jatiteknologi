import { platformId } from "./platform/id";

/** Indonesian interface strings, the source of the keys. `en.ts` must have exactly these keys. */
export const id = {
  meta: {
    siteTitle: "Jatiteknologi",
    title: (page: string) => `${page} · Jatiteknologi`,
    homeDescription:
      "Jatiteknologi membangun sistem untuk usaha yang sudah terlalu besar untuk dicatat di Excel, tetapi belum perlu vendor besar.",
  },
  skipLink: "Langsung ke konten",
  nav: {
    label: "Utama",
    menu: "Menu",
    close: "Tutup menu",
    language: "Pilih bahasa",
    primaryAction: "Jadwalkan obrolan",
    integrations: "Integrasi",
    howWeWork: "Cara kerja",
  },
  footer: {
    tagline: "Teknologi sekuat jati.",
    integrationsHeading: "Integrasi",
    companyHeading: "Perusahaan",
    contactHeading: "Kontak",
    location: "Tangerang, Banten",
    legal: (year: number) =>
      `© ${year} PT Jati Teknologi Indonesia · NIB 0410230086416 · Kab. Tangerang, Banten`,
  },
  notFound: {
    title: "Halaman tidak ditemukan",
    eyebrow: "404",
    headline: "Halaman ini tidak ditemukan.",
    lead: "Alamat yang Anda buka mungkin salah, atau halamannya sudah dipindahkan.",
    home: "Kembali ke beranda",
  },
  home: {
    anchors: {
      howWeWork: "cara-kerja",
    },
    actions: {
      email: "Kirim email",
    },
    learnMore: "Pelajari layanan",
    hero: {
      headline: "Sistem bisnis yang awet untuk UMKM yang terus tumbuh.",
      lead: "Kami membangun dan merawat sistem bisnis untuk UMKM: ERPNext, perangkat lunak khusus, dan pendampingan TI. Anda bicara langsung dengan engineer yang membangunnya.",
    },
    art: {
      receipt: "Nota",
      warehouse: "Gudang",
      cashier: "Kasir",
      courier: "Kurir",
      window: "Sistem Anda",
      status: "Stok gudang: cocok",
    },
    foundation: {
      eyebrow: "Integrasi platform",
      headline: "Sistem Anda, tersambung ke platform yang Anda pakai.",
      checkIntegrations:
        "Kami membangun integrasi, aplikasi, dan otomasi lewat API publik tiap platform.",
      checkIndependent: "Kami perusahaan independen dan tidak berafiliasi dengan platform ini.",
      pageLabel: "halaman integrasi",
      trademark:
        "Frappe, ERPNext, Odoo, Meta, WhatsApp, Instagram, Facebook, Threads, Shopify, Shopee, TikTok, dan TikTok Shop adalah merek dagang milik pemiliknya masing-masing. Jatiteknologi adalah perusahaan independen dan tidak berafiliasi dengan, didukung, atau disponsori oleh pemilik merek tersebut.",
    },
    erp: {
      eyebrow: "Implementasi ERPNext",
      headline: "Pindah dari spreadsheet ke ERPNext, tanpa terikat pada satu vendor.",
      window: "ERPNext · Persediaan",
      status: "Stok gudang: cocok",
      features: {
        stock: {
          title: "Stok, pesanan, dan keuangan di satu tempat",
          description: "Tim Anda mencatat sekali, dan semua bagian melihat angka yang sama.",
        },
        data: {
          title: "Data dan kode tetap milik Anda",
          description: "ERPNext bersifat open source, jadi Anda tidak terkunci pada satu vendor.",
        },
        phased: {
          title: "Pindah bertahap, mulai dari satu proses",
          description: "Kami mulai dari proses yang paling mahal, lalu menambah yang lain.",
        },
      },
    },
    custom: {
      eyebrow: "Pengembangan perangkat lunak",
      headline: "Perangkat lunak yang mengikuti cara kerja Anda, bukan sebaliknya.",
      window: "Aplikasi internal",
      status: "Pesanan tersinkron",
      features: {
        apps: {
          title: "Aplikasi web dan sistem internal",
          description: "Dibuat untuk alur kerja Anda, bukan template yang dipaksakan.",
        },
        integration: {
          title: "Integrasi dengan alat yang sudah Anda pakai",
          description: "Sistem baru terhubung dengan aplikasi yang sudah berjalan.",
        },
        docs: {
          title: "Dokumentasi untuk setiap sistem",
          description: "Tim Anda, atau vendor lain, bisa merawatnya tanpa menebak.",
        },
      },
    },
    care: {
      eyebrow: "Pendampingan TI",
      headline: "Kami tidak menghilang setelah serah terima.",
      window: "Pemantauan sistem",
      status: "Contoh tampilan sistem",
      features: {
        monitoring: {
          title: "Pemantauan dan perbaikan rutin",
          description: "Kami memeriksa sistem secara berkala dan memperbaiki masalahnya.",
        },
        adjustments: {
          title: "Penyesuaian saat usaha berkembang",
          description: "Saat proses Anda berubah, sistem ikut kami sesuaikan.",
        },
        engineer: {
          title: "Satu engineer yang mengenal sistem Anda",
          description: "Anda tidak perlu menjelaskan ulang dari awal setiap kali.",
        },
      },
    },
    howWeWork: {
      eyebrow: "Cara kami bekerja",
      headline: "Lapis demi lapis, seperti lingkar tahun kayu jati.",
      steps: [
        {
          title: "Dengarkan",
          description: "Kami melihat cara kerja Anda dan mencatat masalah yang paling mahal.",
        },
        {
          title: "Rancang",
          description: "Kami menuliskan lingkup, biaya, dan jadwal sebelum mulai.",
        },
        {
          title: "Bangun bertahap",
          description: "Kami mulai dari satu proses, lalu menambah lapis berikutnya.",
        },
        {
          title: "Dampingi",
          description: "Setelah sistem dipakai, kami tetap memantau dan memperbaikinya.",
        },
      ],
    },
    founder: {
      eyebrow: "Yang membangun sistem Anda",
      name: "Risqi Romadhoni, pendiri",
      photoAlt: "Potret Risqi Romadhoni, pendiri Jatiteknologi",
      bio: "Saya membangun perangkat lunak sejak 2016. Di Yummy Corp, saya membantu sistem pesanan Yummyshop melayani lebih dari 50.000 pedagang UMKM. Di Virtual Spirit, saya mengembangkan Medplanner, aplikasi medis untuk pemerintah Malaysia.",
      disclosure: "Pengalaman di atas adalah pengalaman pribadi pendiri di perusahaan sebelumnya.",
      personalSite: "Situs pribadi saya, heyris.me",
      newTab: "(dibuka di tab baru)",
    },
    closing: {
      headline: "Mulai dari satu proses. Tumbuh bertahap.",
    },
  },
  platform: platformId,
};

export type Dictionary = typeof id;
