import { platformEn } from "./platform/en";
import type { Dictionary } from "./id";

/** English interface strings. Must have exactly the keys of `id.ts`. */
export const en: Dictionary = {
  meta: {
    siteTitle: "Jatiteknologi",
    title: (page) => `${page} · Jatiteknologi`,
    homeDescription:
      "Jatiteknologi builds systems for businesses that have outgrown Excel but don't need a giant vendor.",
  },
  skipLink: "Skip to content",
  nav: {
    label: "Main",
    menu: "Menu",
    close: "Close menu",
    language: "Choose language",
    primaryAction: "Schedule a chat",
    integrations: "Integrations",
    howWeWork: "How we work",
  },
  footer: {
    tagline: "Technology as strong as teak.",
    integrationsHeading: "Integrations",
    companyHeading: "Company",
    contactHeading: "Contact",
    location: "Tangerang, Banten",
    legal: (year) =>
      `© ${year} PT Jati Teknologi Indonesia · NIB 0410230086416 · Tangerang Regency, Banten`,
  },
  notFound: {
    title: "Page not found",
    eyebrow: "404",
    headline: "This page could not be found.",
    lead: "The address may be wrong, or the page may have moved.",
    home: "Go to the home page",
  },
  home: {
    anchors: {
      howWeWork: "how-we-work",
    },
    actions: {
      email: "Send an email",
    },
    learnMore: "Explore the service",
    hero: {
      headline: "Durable business systems for growing SMEs.",
      lead: "We build and look after business systems for SMEs: ERPNext, custom software, and IT long-term care. You talk directly with the engineer who builds it.",
    },
    art: {
      receipt: "Receipt",
      warehouse: "Warehouse",
      cashier: "Cashier",
      courier: "Courier",
      window: "Your system",
      status: "Warehouse stock: matched",
    },
    foundation: {
      eyebrow: "Platform integration",
      headline: "Your system, connected to the platforms you use.",
      checkIntegrations:
        "We build integrations, apps and automation through each platform's public API.",
      checkIndependent:
        "We are an independent company and are not affiliated with these platforms.",
      pageLabel: "integration page",
      trademark:
        "Frappe, ERPNext, Odoo, Meta, WhatsApp, Instagram, Facebook, Threads, Shopify, Shopee, TikTok, and TikTok Shop are trademarks of their respective owners. Jatiteknologi is an independent company and is not affiliated with, endorsed by, or sponsored by those trademark owners.",
    },
    erp: {
      eyebrow: "ERPNext implementation",
      headline: "Move from spreadsheets to ERPNext without being tied to one vendor.",
      window: "ERPNext · Inventory",
      status: "Warehouse stock: matched",
      features: {
        stock: {
          title: "Stock, orders and finances in one place",
          description:
            "Your team records things once, and every part of the business sees the same numbers.",
        },
        data: {
          title: "Your data and code stay yours",
          description: "ERPNext is open source, so you are not locked in to one vendor.",
        },
        phased: {
          title: "Move in stages, starting with one process",
          description: "We start with the process that costs the most, then add the others.",
        },
      },
    },
    custom: {
      eyebrow: "Software development",
      headline: "Software that fits how you work, not the other way around.",
      window: "Internal app",
      status: "Orders synced",
      features: {
        apps: {
          title: "Web apps and internal systems",
          description: "Built for your workflow, not a template forced on you.",
        },
        integration: {
          title: "Integration with the tools you already use",
          description: "The new system connects to the apps that already run.",
        },
        docs: {
          title: "Documentation for every system",
          description: "Your team, or another vendor, can maintain it without guessing.",
        },
      },
    },
    care: {
      eyebrow: "Long-term IT care",
      headline: "We don't disappear after handover.",
      window: "System monitoring",
      status: "Example system view",
      features: {
        monitoring: {
          title: "Regular monitoring and fixes",
          description: "We check your systems regularly and fix the problems.",
        },
        adjustments: {
          title: "Adjustments as your business grows",
          description: "When your processes change, we adjust the system to match.",
        },
        engineer: {
          title: "One engineer who knows your system",
          description: "You don't need to explain everything from the beginning each time.",
        },
      },
    },
    howWeWork: {
      eyebrow: "How we work",
      headline: "Layer by layer, like the growth rings in teak.",
      steps: [
        {
          title: "Listen",
          description: "We look at how you work and note the problems that cost the most.",
        },
        {
          title: "Plan",
          description: "We write down the scope, cost, and schedule before we start.",
        },
        {
          title: "Build in stages",
          description: "We start with one process, then add the next layer.",
        },
        {
          title: "Stay with you",
          description: "After the system is in use, we keep monitoring and improving it.",
        },
      ],
    },
    founder: {
      eyebrow: "The person building your system",
      name: "Risqi Romadhoni, founder",
      photoAlt: "Portrait of Risqi Romadhoni, founder of Jatiteknologi",
      bio: "I have been building software since 2016. At Yummy Corp, I helped the Yummyshop order system serve more than 50,000 SME merchants. At Virtual Spirit, I developed Medplanner, a medical app for the Malaysian government.",
      disclosure:
        "The experience above is the founder's personal experience at previous companies.",
    },
    closing: {
      headline: "Start with one process. Grow step by step.",
    },
  },
  platform: platformEn,
};
