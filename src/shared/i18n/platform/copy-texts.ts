import type { PlatformCard, PlatformCopy, PlatformShared } from "./types";

/** The texts of a list of cards: titles, descriptions, and source labels. */
function cardTexts(cards: ReadonlyArray<PlatformCard>): Array<string> {
  return cards.flatMap((card) => [
    card.title,
    card.description,
    ...(card.source ? [card.source.label] : []),
  ]);
}

/** Every visible string of one platform page, in a fixed order. Tests read copy through this list. */
export function pageTexts(copy: PlatformCopy): Array<string> {
  return [
    copy.name,
    copy.hero.eyebrow,
    copy.hero.headline,
    copy.hero.lead,
    ...(copy.hero.chips ?? []),
    copy.hero.nonAffiliation,
    copy.problems.title,
    ...cardTexts(copy.problems.items),
    ...copy.builds.items.flatMap((step) => [step.title, step.description]),
    ...(copy.extra ? [copy.extra.eyebrow, copy.extra.title, ...cardTexts(copy.extra.items)] : []),
    ...(copy.extra?.link ? [copy.extra.link.label] : []),
    copy.flow.layer,
    copy.flow.system,
    ...copy.flow.notes,
    copy.limits.eyebrow,
    copy.limits.title,
    ...cardTexts(copy.limits.items),
    ...copy.experience.paragraphs,
  ];
}

/** The `href` of every source label on one platform page, in the order the page shows them. */
export function sourceHrefs(copy: PlatformCopy): Array<string> {
  const cards = [...copy.problems.items, ...copy.limits.items, ...(copy.extra?.items ?? [])];

  return cards.flatMap((card) => (card.source ? [card.source.href] : []));
}

/** Every visible string of the copy that all platform pages share, in a fixed order. */
export function sharedTexts(shared: PlatformShared): Array<string> {
  return [
    shared.breadcrumb.label,
    shared.breadcrumb.home,
    shared.actions.email,
    shared.problems.eyebrow,
    shared.builds.eyebrow,
    shared.builds.title,
    shared.builds.description,
    shared.flow.eyebrow,
    shared.flow.title,
    shared.experience.eyebrow,
    shared.experience.title,
    shared.experience.processLink,
    shared.terms.eyebrow,
    shared.terms.title,
    ...cardTexts(shared.terms.items),
    shared.closing.headline,
    shared.closing.disclaimer,
  ];
}
