import { expect, test } from "../fixtures";
import { PREVIEW_URL } from "../origins";

test.use({ baseURL: PREVIEW_URL });

test.describe("robots.txt", () => {
  // The build defaults to the workers.dev URL, so the body disallows every path.
  test("Serves a robots.txt that disallows the workers.dev host", async ({ request }) => {
    const response = await request.get("/robots.txt");

    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toContain("text/plain");
    expect(await response.text()).toBe("User-agent: *\nDisallow: /\n");
  });
});
