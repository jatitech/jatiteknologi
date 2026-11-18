import { frappeErpnextEn } from "./frappe-erpnext";
import { metaEn } from "./meta";
import { odooEn } from "./odoo";
import { platformSharedEn } from "./shared";
import { shopeeEn } from "./shopee";
import { shopifyEn } from "./shopify";
import { tiktokShopEn } from "./tiktok-shop";
import type { PlatformDictionary } from "../types";

/** English platform copy, with the same keys as `id/index.ts`. */
export const platformEn = {
  shared: platformSharedEn,
  pages: {
    "frappe-erpnext": frappeErpnextEn,
    odoo: odooEn,
    meta: metaEn,
    shopify: shopifyEn,
    shopee: shopeeEn,
    "tiktok-shop": tiktokShopEn,
  },
} satisfies PlatformDictionary;
