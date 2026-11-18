import { describe, expectTypeOf, it } from "vite-plus/test";

import { en } from "./en";
import type { Dictionary } from "./id";
import { dictionaryFor, localizedPath, type Locale } from "./index";

describe("locales", () => {
  it("are Indonesian and English only", () => {
    expectTypeOf<Locale>().toEqualTypeOf<"id" | "en">();
  });
});

describe("localizedPath", () => {
  it("takes a site locale and returns a path", () => {
    expectTypeOf(localizedPath).parameter(0).toEqualTypeOf<Locale>();
    expectTypeOf(localizedPath).returns.toEqualTypeOf<string>();
  });

  it("rejects an unknown locale or route name", () => {
    // @ts-expect-error French is not a site locale.
    localizedPath("fr", "home");

    // @ts-expect-error There is no `about` route.
    localizedPath("id", "about");
  });
});

describe("dictionaries", () => {
  it("match English to the Indonesian keys", () => {
    expectTypeOf(en).toEqualTypeOf<Dictionary>();
    expectTypeOf(dictionaryFor).returns.toEqualTypeOf<Dictionary>();
  });
});
