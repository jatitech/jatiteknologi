import { defineConfig } from "void/config";

export default defineConfig({
  cloudflare: {
    name: "jatiteknologi",
    account_id: "34bc2037f78fbf5cb12c588a74a23d47",
    compatibility_date: "2026-11-10",
    compatibility_flags: ["nodejs_als"],
    routes: [{ pattern: "jatiteknologi.com", custom_domain: true }],
    // Void verifies each deploy through a workers.dev preview URL. Keep both on when a custom
    // domain is added under `routes`, which turns workers.dev off by default.
    workers_dev: true,
    preview_urls: true,
  },
});
