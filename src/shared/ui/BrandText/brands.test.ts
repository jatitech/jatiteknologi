import { describe, expect, it } from "vite-plus/test";

import { splitBrands } from "./brands";

describe("splitBrands", () => {
  it("marks each brand name and leaves the text between them plain", () => {
    expect(splitBrands("Kami membangun di atas ERPNext dan Frappe.")).toEqual([
      { text: "Kami membangun di atas ", brand: false },
      { text: "ERPNext", brand: true },
      { text: " dan ", brand: false },
      { text: "Frappe", brand: true },
      { text: ".", brand: false },
    ]);
  });

  it("keeps TikTok Shop as one name, with a no-break space", () => {
    expect(splitBrands("Pesanan TikTok Shop")).toEqual([
      { text: "Pesanan ", brand: false },
      { text: "TikTok Shop", brand: true },
    ]);
  });

  it("does not mark a brand name inside another word", () => {
    expect(splitBrands("Metaverse")).toEqual([{ text: "Metaverse", brand: false }]);
  });

  it("gives text with no brand name as one plain run", () => {
    expect(splitBrands("Tanpa merek.")).toEqual([{ text: "Tanpa merek.", brand: false }]);
  });

  it("gives no runs for empty text", () => {
    expect(splitBrands("")).toEqual([]);
  });
});
