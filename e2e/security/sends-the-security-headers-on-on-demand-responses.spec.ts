import { expect, test } from "../fixtures";
import { PREVIEW_URL } from "../origins";

import { EXPECTED_SECURITY_HEADERS } from "./expected-headers";

test.use({ baseURL: PREVIEW_URL });

test.describe("Security headers", () => {
  test("Sends the security headers on on-demand responses", async ({ request }) => {
    // A path with no page is answered by the Worker, so `public/_headers` does not reach it.
    const response = await request.get("/this-page-does-not-exist");

    expect(response.status()).toBe(404);
    expect(response.headers()).toMatchObject(EXPECTED_SECURITY_HEADERS);
  });
});
