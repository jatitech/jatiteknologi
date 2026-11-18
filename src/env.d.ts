/// <reference types="astro/client" />

// `.astro` files imported from `.ts` (segment index re-exports). Props are not carried through this type.
declare module "*.astro" {
  import type { AstroComponentFactory } from "astro/runtime/server/index.js";

  const Component: AstroComponentFactory;

  export default Component;
}
