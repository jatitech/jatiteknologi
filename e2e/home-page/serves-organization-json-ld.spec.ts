import { expect, test } from "../fixtures";

test.describe("Home page", () => {
  test("Serves a parseable Organization JSON-LD block", async ({ page }) => {
    for (const path of ["/", "/en"]) {
      await page.goto(path);

      const script = page.locator('script[type="application/ld+json"]');
      await expect(script).toHaveCount(1);

      const data = JSON.parse((await script.textContent()) ?? "");
      expect(data).toMatchObject({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "PT Jati Teknologi Indonesia",
        alternateName: "Jatiteknologi",
        url: expect.stringMatching(/\/$/),
        logo: expect.stringMatching(/\/icon-512\.png$/),
        email: "pt@jatiteknologi.com",
        foundingDate: "2023",
        address: {
          addressLocality: "Kabupaten Tangerang",
          addressRegion: "Banten",
          addressCountry: "ID",
        },
        sameAs: ["https://www.facebook.com/profile.php?id=61587708123428"],
      });
    }
  });
});
