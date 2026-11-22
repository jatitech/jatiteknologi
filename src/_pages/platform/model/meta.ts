import { dictionaryFor, localizedPath, pageTitle, platformCopyFor } from "@/shared/i18n";
import type { Locale, PlatformPageSlug } from "@/shared/i18n";

/** What a platform route passes to `BaseLayout`: its title, description, paths, and header links. */
interface PlatformMeta {
  title: string;
  description: string;
  path: string;
  alternates: Partial<Record<Locale, string>>;
  navLinks: Array<{ href: string; label: string }>;
}

/** The homepage's "how we work" section, from any locale. */
export function howWeWorkHref(locale: Locale): string {
  return `${localizedPath(locale, "home")}#${dictionaryFor(locale).home.anchors.howWeWork}`;
}

/** The head of a platform page. The description is the lead, which is written for each page. */
export function platformMeta(locale: Locale, slug: PlatformPageSlug): PlatformMeta {
  const copy = platformCopyFor(locale, slug);

  return {
    title: pageTitle(locale, copy.name),
    description: copy.hero.lead,
    path: localizedPath(locale, slug),
    alternates: { id: localizedPath("id", slug), en: localizedPath("en", slug) },
    navLinks: [{ href: howWeWorkHref(locale), label: dictionaryFor(locale).nav.howWeWork }],
  };
}
