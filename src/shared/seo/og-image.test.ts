import { readFileSync } from "node:fs";

import { describe, expect, it } from "vite-plus/test";

import { OG_IMAGE } from "./og-image";

const PNG_SIGNATURE = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];

const imageFile = () => readFileSync(new URL(`../../../public${OG_IMAGE.path}`, import.meta.url));

describe("OG_IMAGE", () => {
  it("points at a PNG in public/", () => {
    expect([...imageFile().subarray(0, 8)]).toEqual(PNG_SIGNATURE);
  });

  it("states the width and height the PNG has", () => {
    const bytes = imageFile();

    expect({ width: bytes.readUInt32BE(16), height: bytes.readUInt32BE(20) }).toEqual({
      width: OG_IMAGE.width,
      height: OG_IMAGE.height,
    });
  });
});
