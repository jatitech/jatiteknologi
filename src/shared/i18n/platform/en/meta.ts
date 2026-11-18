import type { PlatformCopy } from "../types";

const WHATSAPP_PRICING = "https://developers.facebook.com/docs/whatsapp/pricing";

/** English for Meta, a translation of `id/meta.ts`. */
export const metaEn: PlatformCopy = {
  name: "Meta",
  hero: {
    eyebrow: "Platform · Meta",
    headline: "WhatsApp and Instagram chats go into your order system.",
    lead: "We build integrations between WhatsApp, Instagram, and Facebook and your order, stock, and customer systems, using Meta's public API.",
    chips: ["WhatsApp", "Instagram", "Facebook", "Threads"],
    nonAffiliation:
      "Meta, WhatsApp, Instagram, Facebook, and Threads are trademarks of Meta Platforms, Inc. Jatiteknologi is an independent company, not a Meta Business Partner or Tech Provider, and is not endorsed by Meta.",
  },
  problems: {
    title: "Common problems for businesses that sell through Meta",
    items: [
      {
        title: "Orders spread across many chats",
        description:
          "Orders from WhatsApp and Instagram DMs are written down by hand in notebooks or spreadsheets. Orders get missed and stock stops matching.",
      },
      {
        title: "Cost per message",
        description:
          "WhatsApp Business Platform charges per message from 1 July 2025, by category and country.",
        source: {
          label: "Source: Meta for Developers, WhatsApp pricing, read 17 November 2026",
          href: WHATSAPP_PRICING,
        },
      },
      {
        title: "The 24-hour window limit",
        description:
          "Free-form messages may only be sent while the 24-hour customer service window is open. Outside it, businesses can only use template messages.",
        source: {
          label: "Source: Meta for Developers, WhatsApp pricing, read 17 November 2026",
          href: WHATSAPP_PRICING,
        },
      },
      {
        title: "App permissions",
        description:
          "An app used by people who have no role in it must pass Meta's App Review first. The process needs preparing.",
        source: {
          label: "Source: Meta for Developers, App Review, read 17 November 2026",
          href: "https://developers.facebook.com/docs/app-review",
        },
      },
    ],
  },
  builds: {
    items: [
      {
        title: "Messages go into the order system",
        description:
          "WhatsApp chats and Instagram DMs become orders or tickets in ERPNext, Odoo, or your system.",
      },
      {
        title: "Cost report by category",
        description:
          "WhatsApp message costs are calculated by category, so the cost of each order is clear.",
      },
      {
        title: "Templates and replies within 24 hours",
        description:
          "Free replies while the window is open, template messages once it has closed, following Meta's rules.",
      },
      {
        title: "App Review preparation",
        description:
          "We prepare the app, permissions, and App Review materials, or build inside your own Meta app.",
      },
    ],
  },
  extra: {
    eyebrow: "Per app",
    title: "What can be connected for each app.",
    items: [
      {
        title: "WhatsApp",
        description: "Chats, template messages, and order status.",
      },
      {
        title: "Instagram",
        description: "DMs and comments for business accounts.",
      },
      {
        title: "Facebook",
        description: "Page messages, comments, and Lead Ads.",
      },
    ],
  },
  flow: {
    layer: "Jatiteknologi integration",
    system: "ERPNext, Odoo, or your system",
    notes: [
      "We use Meta's public API with the permission you give.",
      "You can withdraw access permission at any time.",
      "Every forwarded message has a record that can be checked.",
    ],
  },
  limits: {
    eyebrow: "Limits you need to know about",
    title: "What decides the result.",
    items: [
      {
        title: "Paid messages by category",
        description:
          "Messages from businesses to customers are charged by category. We work out an estimate of the cost before building.",
        source: {
          label: "Source: Meta for Developers, WhatsApp pricing, read 17 November 2026",
          href: WHATSAPP_PRICING,
        },
      },
      {
        title: "Templates outside the 24-hour window",
        description:
          "Outside the 24-hour window, businesses use template messages that follow Meta's rules.",
        source: {
          label: "Source: Meta for Developers, WhatsApp pricing, read 17 November 2026",
          href: WHATSAPP_PRICING,
        },
      },
      {
        title: "Call limits and App Review",
        description:
          "The Graph API limits calls per hour according to the number of app users. Public apps need App Review.",
        source: {
          label: "Source: Meta for Developers, Rate limiting, read 17 November 2026",
          href: "https://developers.facebook.com/docs/graph-api/overview/rate-limiting",
        },
      },
    ],
  },
  experience: {
    paragraphs: [
      "Our founder has worked in software professionally since 2016. We don't have a Meta case study yet.",
      "We start with one small flow, such as a WhatsApp chat turning into an order, so you can judge the result before going further.",
    ],
  },
};
