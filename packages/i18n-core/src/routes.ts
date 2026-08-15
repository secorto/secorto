import { SectionDictionary } from './dictionary'

/**
 * Localized route slugs per section.
 */
export type SectionRoutes<
  Section extends string,
  Language extends string
> = SectionDictionary<
  Section,
  Language,
  string
>

/**
 * Returns the localized slug for a section.
 */
export function getSectionRoute<Section extends string,
  Language extends string
>(
  routes: SectionRoutes<Section, Language>,
  section: Section,
  locale: Language
): string {
  return routes[section][locale]
}

/**
 * Returns the localized URL for a section.
 */
export function getSectionURL<
  Section extends string,
  Language extends string
>(
  routes: SectionRoutes<Section, Language>,
  section: Section,
  locale: Language
): string {
  return `/${locale}/${getSectionRoute(routes, section, locale)}`
}

/**
 * Returns the localized URL for a content entry
 */
export function getEntryURL<
  Section extends string,
  Language extends string
>(
  routes: SectionRoutes<Section, Language>,
  section: Section,
  locale: Language,
  slug: string
): string {
  return `${getSectionURL(routes, section, locale)}/${slug}`
}
