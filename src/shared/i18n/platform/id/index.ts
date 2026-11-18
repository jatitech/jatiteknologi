import { frappeErpnextId } from "./frappe-erpnext";
import { metaId } from "./meta";
import { odooId } from "./odoo";
import { platformSharedId } from "./shared";
import { shopeeId } from "./shopee";
import { shopifyId } from "./shopify";
import { tiktokShopId } from "./tiktok-shop";
import type { PlatformDictionary } from "../types";

/** Indonesian platform copy: the shared text and each platform page's own text. A new page joins `pages`. */
export const platformId = {
  shared: platformSharedId,
  pages: {
    "frappe-erpnext": frappeErpnextId,
    odoo: odooId,
    meta: metaId,
    shopify: shopifyId,
    shopee: shopeeId,
    "tiktok-shop": tiktokShopId,
  },
} satisfies PlatformDictionary;
