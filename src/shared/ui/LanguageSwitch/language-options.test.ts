import { describe, expect, it } from "vite-plus/test";

import { languageOptions } from "./language-options";

describe("languageOptions", () => {
  it("links each locale to this page's translation and marks the current one", () => {
    expect(languageOptions("en", { id: "/", en: "/en" })).toEqual([
      { locale: "id", label: "ID", href: "/", current: false },
      { locale: "en", label: "EN", href: "/en", current: true },
    ]);
  });

  it("links a locale without a translation to its home page", () => {
    expect(languageOptions("id", { id: "/404" })).toEqual([
      { locale: "id", label: "ID", href: "/404", current: true },
      { locale: "en", label: "EN", href: "/en", current: false },
    ]);
  });
});
