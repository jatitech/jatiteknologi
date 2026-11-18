import type { PlatformCopy } from "../types";

/** English for Shopee, a translation of `id/shopee.ts`. */
export const shopeeEn: PlatformCopy = {
  name: "Shopee",
  hero: {
    eyebrow: "Platform · Shopee",
    headline: "Work out the net profit on every Shopee order, and keep stock to one count.",
    lead: "We build order and stock sync and margin reports for Shopee sellers, through the Shopee Open Platform once access is approved.",
    nonAffiliation: "Jatiteknologi is an independent company and is not affiliated with Shopee.",
  },
  problems: {
    title: "Common problems for Shopee sellers",
    items: [
      {
        title: "Per-order fees have risen",
        description:
          "Since 20 July 2025, Shopee has charged a Rp1.250 order-processing fee per completed order, on top of other fees. The margin on each order changes too.",
        source: {
          label: "Source: Bisnis.com, 2 July 2025",
          href: "https://teknologi.bisnis.com/read/20250702/266/1889692/shopee-kenakan-biaya-rp1250-per-transaksi-kepada-pedagang-berlaku-mulai-20-juli",
        },
      },
      {
        title: "Stock sold twice",
        description:
          "The same stock is sold across several channels. One order recorded late makes the stock go negative.",
      },
      {
        title: "Payouts do not match prices",
        description:
          "Fees are deducted before the payout arrives. Matching each payout to its orders one by one takes time.",
      },
      {
        title: "Several shops, several dashboards",
        description: "Sellers with more than one shop have to open each dashboard to see orders.",
      },
    ],
  },
  builds: {
    items: [
      {
        title: "Margin report per order",
        description: "Price, platform fees, and cost of goods are calculated into net profit.",
      },
      {
        title: "Order and stock sync",
        description: "Shopee orders go into the ERP, and ERP stock goes back to Shopee.",
      },
      {
        title: "Payout reconciliation",
        description: "Payouts received are matched to orders and fees.",
      },
      {
        title: "Multi-shop dashboard",
        description: "Orders from all shops in one view.",
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
    link: { label: "See also the TikTok Shop page →", to: "tiktok-shop" },
  },
  flow: {
    layer: "Jatiteknologi integration",
    system: "ERPNext, Odoo, or accounting",
    notes: [
      "We use the Shopee Open Platform with the permission you give.",
      "You can revoke access permission at any time.",
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
          "Access to shop data through the Shopee Open Platform depends on Shopee's approval and the shop owner's permission.",
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
      "Our founder has worked in software professionally since 2016. We don't have a Shopee case study yet.",
      "We start with one small flow, such as one source of stock, so you can judge the result before going further.",
    ],
  },
};
