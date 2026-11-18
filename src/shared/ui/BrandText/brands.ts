/**
 * Brand names keep their spelling in both languages. Longer names come first, so "TikTok Shop" is
 * one name and not "TikTok" followed by "Shop".
 */
const BRAND_NAMES = [
  "TikTok Shop",
  "Frappe",
  "ERPNext",
  "Odoo",
  "Meta",
  "WhatsApp",
  "Instagram",
  "Facebook",
  "Threads",
  "Shopify",
  "Shopee",
  "TikTok",
];

const BRAND_PATTERN = new RegExp(`\\b(${BRAND_NAMES.join("|")})\\b`, "g");

/** A run of text. `brand` runs are brand names, which get `translate="no"`. */
export interface TextRun {
  text: string;
  brand: boolean;
}

/**
 * Splits `text` into runs, so each brand name can be wrapped on its own. A brand name is written
 * with a no-break space inside it, as the design asks for "TikTok Shop".
 */
export function splitBrands(text: string): TextRun[] {
  const runs: TextRun[] = [];
  let last = 0;

  for (const match of text.matchAll(BRAND_PATTERN)) {
    if (match.index > last) runs.push({ text: text.slice(last, match.index), brand: false });

    runs.push({ text: match[0].replace(" ", " "), brand: true });
    last = match.index + match[0].length;
  }

  if (last < text.length) runs.push({ text: text.slice(last), brand: false });

  return runs;
}
