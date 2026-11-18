import type { PlatformShared } from "../types";

/** English copy that every platform page shares. A translation of `id/shared.ts`. */
export const platformSharedEn: PlatformShared = {
  breadcrumb: { label: "Breadcrumb", home: "Home" },
  actions: { email: "Send an email" },
  problems: { eyebrow: "Common problems" },
  builds: {
    eyebrow: "Solutions",
    title: "What we can build",
    description: "One piece of work for each problem above.",
  },
  flow: {
    eyebrow: "How it works",
    title: "From the platform to your system, through one layer we look after.",
  },
  experience: {
    eyebrow: "Our experience",
    title: "Straight talk about our experience.",
    processLink: "How we work: listen, plan, build in stages, stay with you →",
  },
  terms: {
    eyebrow: "Costs, API access, and data",
    title: "On costs, API access, and data.",
    items: [
      {
        title: "Costs",
        description:
          "We write our project fees down per project before work starts. You pay the platform's own fees directly to the platform.",
      },
      {
        title: "API access",
        description:
          "Platforms can change their APIs or their rules. We provide integration care as a separate service.",
      },
      {
        title: "Data",
        description:
          "Data stays yours, and you can revoke the app's access from the store or account settings at any time.",
      },
    ],
  },
  closing: {
    headline: "Start with the one flow that takes the most time.",
    disclaimer:
      "Frappe, ERPNext, Odoo, Meta, WhatsApp, Instagram, Facebook, Threads, Shopify, Shopee, TikTok, and TikTok Shop are trademarks of their respective owners. Jatiteknologi is an independent company and is not affiliated with, endorsed by, or sponsored by those trademark owners.",
  },
};
