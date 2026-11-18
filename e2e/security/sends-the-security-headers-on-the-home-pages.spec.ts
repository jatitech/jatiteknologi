import { expect, test } from "../fixtures";
import { PREVIEW_URL } from "../origins";

import { EXPECTED_SECURITY_HEADERS } from "./expected-headers";

test.use({ baseURL: PREVIEW_URL });

test.describe("Security headers", () => {
  test("Sends the security headers on / and /en", async ({ request }) => {
    for (const path of ["/", "/en"]) {
      const response = await request.get(path);

      expect(response.status()).toBe(200);
      expect(response.headers()).toMatchObject(EXPECTED_SECURITY_HEADERS);
    }
  });
});
