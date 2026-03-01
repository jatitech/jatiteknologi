type Runtime = import("@astrojs/cloudflare").Runtime<Env>;
type Locale = import("@/paraglide/runtime").Locale;

declare namespace App {
	interface Locals extends Runtime {}
}

interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare const __LOCALES__: Locale[];