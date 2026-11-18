import type { PlatformCopy } from "../types";

/** English for Shopify, a translation of `id/shopify.ts`. */
export const shopifyEn: PlatformCopy = {
  name: "Shopify",
  hero: {
    eyebrow: "Platform · Shopify",
    headline: "Shopify stores connected to your stock, payments, and finances.",
    lead: "We build apps, integrations, and theme customization for Shopify stores, using the Shopify API.",
    nonAffiliation: "Jatiteknologi is an independent company and is not affiliated with Shopify.",
  },
  problems: {
    title: "Common problems with Shopify",
    items: [
      {
        title: "Local payments",
        description:
          "Xendit has a guide for connecting Shopify for merchants in Indonesia. Payment methods and reconciliation still need adjusting for each business.",
        source: {
          label: "Source: Xendit Help Center, updated 10 October 2022",
          href: "https://help.xendit.co/hc/en-us/articles/360028907851-How-can-I-integrate-my-Shopify-with-Xendit",
        },
      },
      {
        title: "API limits",
        description:
          "Shopify's Admin GraphQL API limits requests by query cost, which is set per plan. Large syncs must be designed so they do not hit the limit.",
        source: {
          label: "Source: shopify.dev, Shopify API limits, read 17 November 2026",
          href: "https://shopify.dev/docs/api/usage/limits",
        },
      },
      {
        title: "Stock and orders in two systems",
        description:
          "Shopify orders must go into the ERP, and stock from the ERP must go back to the store.",
      },
      {
        title: "Custom looks and flows",
        description:
          "Product pages, themes, or order flows that the standard theme lacks need theme code or your own app.",
      },
    ],
  },
  builds: {
    items: [
      {
        title: "Payment reconciliation",
        description: "Payments from local providers are matched to orders.",
      },
      {
        title: "Syncs that respect API limits",
        description:
          "Data is sent in stages through a queue, so it does not run into the query cost limit.",
      },
      {
        title: "Order and stock sync",
        description: "Orders go into the ERP, and stock goes back to Shopify.",
      },
      {
        title: "Custom theme and apps",
        description: "Pages, components, or features made for your store.",
      },
    ],
  },
  flow: {
    layer: "Jatiteknologi integration",
    system: "ERPNext, Odoo, or accounting",
    notes: [
      "We use the Shopify API with the access you give.",
      "You can revoke access permission at any time.",
      "Every sync has a record that can be checked.",
    ],
  },
  limits: {
    eyebrow: "Limits you need to know about",
    title: "What decides the result.",
    items: [
      {
        title: "API query cost limit",
        description: "Large syncs are limited by query cost, so data is sent in stages.",
      },
      {
        title: "App review",
        description:
          "Only apps shared with many stores need Shopify's review. An app built for one store does not.",
        source: {
          label: "Source: shopify.dev, app distribution, read 17 November 2026",
          href: "https://shopify.dev/docs/apps/launch/distribution",
        },
      },
      {
        title: "Access to store data",
        description: "The app can only see the data you allow when you install it.",
      },
    ],
  },
  experience: {
    paragraphs: [
      "Our founder has worked in software professionally since 2016. We don't have a Shopify case study yet.",
      "We start with one small flow, such as stock sync, so you can judge the result before going further.",
    ],
  },
};
