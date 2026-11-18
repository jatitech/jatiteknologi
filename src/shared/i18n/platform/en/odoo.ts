import type { PlatformCopy } from "../types";

/** English for Odoo, a translation of `id/odoo.ts`. */
export const odooEn: PlatformCopy = {
  name: "Odoo",
  hero: {
    eyebrow: "Platform · Odoo",
    headline: "Plan your Odoo upgrade, even when it has been customized.",
    lead: "We build custom modules, integrations, and data migration for Odoo, using the development methods and APIs that Odoo provides.",
    nonAffiliation: "Jatiteknologi is an independent company and is not affiliated with Odoo.",
  },
  problems: {
    title: "Common problems with Odoo",
    items: [
      {
        title: "Upgrading with custom modules",
        description:
          "Odoo explains that a database with custom modules needs extra steps during an upgrade. The modules must be fixed and tested on the new version.",
        source: {
          label:
            "Source: Odoo 18.0 documentation, Upgrade a customized database, read 17 November 2026",
          href: "https://www.odoo.com/documentation/18.0/developer/howtos/upgrade_custom_db.html",
        },
      },
      {
        title: "Coretax tax invoices",
        description:
          "Odoo's Indonesian localization module creates XML files for Coretax. Your customer data and invoice flow still need checking and adjusting.",
        source: {
          label: "Source: Odoo 18.0 documentation, Indonesia, read 17 November 2026",
          href: "https://www.odoo.com/documentation/18.0/applications/finance/fiscal_localizations/indonesia.html",
        },
      },
      {
        title: "Marketplace orders typed in again",
        description: "Orders and stock from the marketplace must reach Odoo without manual entry.",
      },
      {
        title: "Moving from or to ERPNext",
        description:
          "Moving master data, opening stock, and running transactions between two systems needs a plan and test runs.",
      },
    ],
  },
  builds: {
    items: [
      {
        title: "Custom modules ready for upgrades",
        description: "Custom features in separate modules, retested on each new version.",
      },
      {
        title: "Invoices and reports",
        description: "Coretax invoice exports are checked and adjusted to your data.",
      },
      {
        title: "Marketplace and payment integrations",
        description: "Orders, stock, and payments come into Odoo through the API.",
      },
      {
        title: "Data migration",
        description: "Moving to or from ERPNext in stages, with old data still accessible.",
      },
    ],
  },
  extra: {
    eyebrow: "Odoo or ERPNext?",
    title: "We work with both.",
    items: [
      {
        title: "You already use Odoo",
        description: "We help you develop, connect, and maintain it. You don't need to move.",
      },
      {
        title: "You haven't decided yet",
        description:
          "We show how the two work differently with your own data, without pushing either one.",
      },
      {
        title: "You want to move",
        description: "We plan a staged migration, from Odoo to ERPNext or the other way around.",
      },
    ],
  },
  flow: {
    layer: "Jatiteknologi modules and integrations",
    system: "Marketplaces, payments, other ERP systems",
    notes: [
      "Modules follow Odoo's development methods, not changes to the core code.",
      "API keys are created with permissions you set, and you can revoke them.",
      "Your data stays in your system.",
    ],
  },
  limits: {
    eyebrow: "Limits you need to know about",
    title: "What decides the result.",
    items: [
      {
        title: "Custom modules change with each version",
        description:
          "Each major Odoo version can change the code. Custom modules need to be retested.",
      },
      {
        title: "How you host affects your choice",
        description:
          "Odoo can run on Odoo Online, Odoo.sh, or your own server. On Odoo Online, custom modules that contain Python code cannot be installed.",
        source: {
          label:
            "Source: Odoo 18.0 documentation, Upgrade a customized database, read 17 November 2026",
          href: "https://www.odoo.com/documentation/18.0/developer/howtos/upgrade_custom_db.html",
        },
      },
      {
        title: "Enterprise-edition features",
        description: "Some Odoo features exist only in the Enterprise edition.",
      },
    ],
  },
  experience: {
    paragraphs: [
      "Our founder has worked in software professionally since 2016.",
      "We don't have an Odoo case study yet. We start with one small flow that you can test before going further.",
    ],
  },
};
