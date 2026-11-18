import { describe, expect, it } from "vite-plus/test";

import { dictionaryFor, pageTitle, platformCopyFor } from "./dictionary";

describe("pageTitle", () => {
  it("gives the home page the site title alone", () => {
    expect(pageTitle("id")).toBe("Jatiteknologi");
    expect(pageTitle("en")).toBe("Jatiteknologi");
  });

  it("appends the site title to a page name", () => {
    expect(pageTitle("id", "Layanan")).toBe("Layanan · Jatiteknologi");
    expect(pageTitle("en", "Services")).toBe("Services · Jatiteknologi");
  });
});

describe("dictionaryFor", () => {
  it("returns each locale's strings", () => {
    expect(dictionaryFor("id").skipLink).toBe("Langsung ke konten");
    expect(dictionaryFor("en").skipLink).toBe("Skip to content");
  });
});

describe("platformCopyFor", () => {
  it("returns the Frappe page's name in each locale", () => {
    expect(platformCopyFor("id", "frappe-erpnext").name).toBe("Frappe dan ERPNext");
    expect(platformCopyFor("en", "frappe-erpnext").name).toBe("Frappe and ERPNext");
  });
});
