import { defineConfig, devices } from "@playwright/test";

import { DEV_URL, PREVIEW_URL } from "./e2e/origins";

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    baseURL: DEV_URL,
    trace: "on-first-retry",
  },
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    { name: "firefox", use: { ...devices["Desktop Firefox"] } },
    { name: "webkit", use: { ...devices["Desktop Safari"] } },
  ],
  webServer: [
    {
      command: "astro dev --ignore-lock",
      url: DEV_URL,
      reuseExistingServer: !process.env.CI,
      gracefulShutdown: { signal: "SIGTERM", timeout: 5000 },
    },
    {
      // Serves dist/, which `test:e2e` builds before Playwright starts. Only it sends public/_headers.
      command: `astro preview --ignore-lock --port ${new URL(PREVIEW_URL).port}`,
      url: PREVIEW_URL,
      reuseExistingServer: !process.env.CI,
      gracefulShutdown: { signal: "SIGTERM", timeout: 5000 },
    },
  ],
});
