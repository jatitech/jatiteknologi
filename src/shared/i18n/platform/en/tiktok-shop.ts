import type { PlatformCopy } from "../types";

/** English for TikTok Shop, a translation of `id/tiktok-shop.ts`. */
export const tiktokShopEn: PlatformCopy = {
  name: "TikTok Shop",
  hero: {
    eyebrow: "Platform · TikTok Shop",
    headline: "TikTok Shop orders go into your system, with no retyping.",
    lead: "We build order, stock, and reporting integrations for TikTok Shop sellers, through the TikTok Shop API once access is approved.",
    nonAffiliation:
      "Jatiteknologi is an independent company and is not affiliated with TikTok Shop.",
  },
  problems: {
    title: "Common problems for TikTok Shop sellers",
    items: [
      {
        title: "Per-order fees",
        description:
          "Since 11 August 2025, TikTok Shop has charged Rp1.250 per order. The fee also shifts your margin.",
        source: {
          label: "Source: Bisnis.com, 3 August 2025",
          href: "https://teknologi.bisnis.com/read/20250803/266/1898840/tokopedia-tiktok-shop-tiru-shopee-tarik-biaya-rp1250-per-pesanan-mulai-11-agustus",
        },
      },
      {
        title: "Orders arrive in waves",
        description:
          "When a live stream or video gets busy, orders come in all at once. Manual recording falls behind, and stock can sell twice.",
      },
      {
        title: "Stock differs by channel",
        description:
          "Stock on TikTok Shop, Shopee, and your own store runs separately from each other.",
      },
      {
        title: "Net profit is hard to compare",
        description:
          "Platform fees differ by channel, so it is hard to tell which channel earns the most.",
      },
    ],
  },
  builds: {
    items: [
      {
        title: "Calculate fees per order",
        description: "Platform fees are calculated per order, so each order's margin is clear.",
      },
      {
        title: "Orders go into the ERP",
        description: "TikTok Shop orders are recorded in your system automatically.",
      },
      {
        title: "One source of stock",
        description: "Stock from the ERP is read by TikTok Shop and other channels.",
      },
      {
        title: "Net profit by channel",
        description: "Compare the net profit of TikTok Shop, Shopee, and your own store.",
      },
    ],
  },
  extra: {
    eyebrow: "Stock from one source",
    title: "One stock for all channels.",
    items: [
      {
        title: "Stock in the ERP",
        description: "ERPNext or Odoo holds the main stock figures.",
      },
      {
        title: "Channels read from there",
        description: "Shopee, TikTok Shop, and your own store use the same figures.",
      },
      {
        title: "Orders recorded once",
        description: "Each order reduces stock once, whatever the channel.",
      },
    ],
    link: { label: "See also the Shopee page →", to: "shopee" },
  },
  flow: {
    layer: "Jatiteknologi integration",
    system: "ERPNext, Odoo, or accounting",
    notes: [
      "We use the TikTok Shop API with the permission you give.",
      "You can withdraw access permission at any time.",
      "Every sync has a record that can be checked.",
    ],
  },
  limits: {
    eyebrow: "Limits you need to know about",
    title: "What decides the result.",
    items: [
      {
        title: "Access needs approval",
        description:
          "Access to shop data through the TikTok Shop API depends on TikTok Shop's approval and the shop owner's permission.",
      },
      {
        title: "Rules and fees change",
        description:
          "Fees and policies can change. We write the date next to every figure on this page.",
      },
      {
        title: "API call limits",
        description:
          "The platform limits how many API calls are allowed, so syncs are designed in stages.",
      },
    ],
  },
  experience: {
    paragraphs: [
      "Our founder has worked in software professionally since 2016. We don't have a TikTok Shop case study yet.",
      "We start with one small flow, such as orders going into the ERP, so you can judge the result before going further.",
    ],
  },
};
