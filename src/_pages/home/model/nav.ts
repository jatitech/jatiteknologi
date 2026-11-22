import { dictionaryFor, type Locale } from "@/shared/i18n";

/** The header links that point at sections of the home page. Only the home page passes them to the header. */
export function homeNavLinks(locale: Locale): Array<{ href: string; label: string }> {
  const strings = dictionaryFor(locale);

  return [{ href: `#${strings.home.anchors.howWeWork}`, label: strings.nav.howWeWork }];
}
