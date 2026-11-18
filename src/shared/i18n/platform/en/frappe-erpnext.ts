import type { PlatformCopy } from "../types";

/** English for Frappe dan ERPNext, a translation of `id/frappe-erpnext.ts`. */
export const frappeErpnextEn: PlatformCopy = {
  name: "Frappe and ERPNext",
  hero: {
    eyebrow: "Platform · Frappe and ERPNext",
    headline: "ERPNext that follows how you work, not the other way around.",
    lead: "We build custom apps, integrations, and care on top of Frappe and ERPNext. The code, data, and documentation stay yours.",
    nonAffiliation:
      "Jatiteknologi is an independent company and is not affiliated with Frappe Technologies.",
  },
  problems: {
    title: "Common problems in ERPNext",
    items: [
      {
        title: "Needs that standard ERPNext does not cover",
        description:
          "Custom order flows, forms, or reports can push people to change the core code, and that makes updates harder.",
      },
      {
        title: "Taxes and reports specific to Indonesia",
        description:
          "Tax invoices and financial reports in Indonesia have their own formats. ERPNext needs adjusting to how your business keeps its records.",
      },
      {
        title: "Upgrading without fear",
        description:
          "A new version can break custom apps. Apps kept apart from the core code and tested first are much safer.",
      },
      {
        title: "Hosting and backups",
        description:
          "A server that goes down, or data that is lost, stops the business. A system needs hosting, backups, and a way to restore them.",
      },
    ],
  },
  builds: {
    items: [
      {
        title: "Custom Frappe apps",
        description:
          "Modules, forms, and special flows in a separate app, not changes to the core code.",
      },
      {
        title: "Reports and printed documents",
        description: "Invoices, reports, and tax exports in your business's format.",
      },
      {
        title: "Planned version upgrades",
        description:
          "New versions are tested on a copy first, then installed on schedule. The documentation is updated too.",
      },
      {
        title: "Hosting and care",
        description:
          "Servers, backups, and how to restore them, written down in the documentation.",
      },
    ],
  },
  flow: {
    layer: "Jatiteknologi custom apps",
    system: "Marketplaces, payments, other systems",
    notes: [
      "Custom apps stay separate from the ERPNext core code.",
      "The code is kept in a repository you own.",
      "Documentation is handed over with every piece of work.",
    ],
  },
  limits: {
    eyebrow: "Open source, yours",
    title: "No lock-in, no surprises.",
    items: [
      {
        title: "Open-source software",
        description: "Frappe and ERPNext are openly licensed. You can run them on your own server.",
      },
      {
        title: "Data can leave with you",
        description: "Data can be exported at any time. Custom code stays in your repository.",
      },
      {
        title: "Hosting of your choice",
        description: "Your own server, a cloud provider, or Frappe Cloud. We help you choose.",
      },
    ],
  },
  experience: {
    paragraphs: [
      "Our founder has worked in software professionally since 2016. We build on the open ERPNext and Frappe.",
      "We don't have client case studies yet. So we offer a small, staged start, so you can judge the results before going further.",
    ],
  },
};
