import { expect, test } from "../fixtures";

test.use({ viewport: { width: 1440, height: 900 } });

test.describe("Home page", () => {
  test("Places the copy of each service section beside its media, not below it", async ({
    page,
  }) => {
    for (const [path, ids] of [
      ["/", ["erp", "custom", "care"]],
      ["/en", ["erp", "custom", "care"]],
    ] as const) {
      await page.goto(path);

      for (const id of ids) {
        const section = page.locator(`section[aria-labelledby="${id}-heading"]`);
        const media = section.locator(':scope > div > [aria-hidden="true"]');
        const copy = section.locator(`#${id}-heading`).locator("xpath=..");

        const mediaBox = await media.boundingBox();
        const copyBox = await copy.boundingBox();
        expect(mediaBox, `${path} ${id} media`).not.toBeNull();
        expect(copyBox, `${path} ${id} copy`).not.toBeNull();

        if (mediaBox === null || copyBox === null) continue;

        // One row: the two boxes overlap vertically and sit side by side.
        expect(copyBox.y, `${path} ${id} copy starts above the media ends`).toBeLessThan(
          mediaBox.y + mediaBox.height,
        );
        expect(mediaBox.y, `${path} ${id} media starts above the copy ends`).toBeLessThan(
          copyBox.y + copyBox.height,
        );
        const apart = Math.abs(copyBox.x - mediaBox.x);
        expect(apart, `${path} ${id} side by side`).toBeGreaterThan(300);
      }
    }
  });
});
