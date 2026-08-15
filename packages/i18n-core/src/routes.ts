import { SectionDictionary, Brand } from './dictionary'

/**
 * Localized route slugs per section.
 */
export type SectionRoutes<
  Section extends string,
  Language extends string
> = Brand<'SectionRoutes', SectionDictionary<Section, Language, string >>
/**
 * Validates that there are no duplicated routes for the same locale and slug across different sections.
 * If a duplicate is found, an error is thrown.
 * @template Section - The type of the section (e.g., 'blog', 'docs').
 * @template Language - The type of the language code (e.g., 'es', 'en').
 * @param routes Routes to be validated
 */

export function sectionRoutes<
  Section extends string,
  Language extends string
>(routes: SectionDictionary<Section, Language, string >): SectionRoutes<Section, Language> {
  const seen = new Map<string, Section>() // key = `${locale}:${slug}`

  for (const section in routes) {
    const localized = routes[section]

    for (const locale in localized) {
      const slug = localized[locale]
      const key = `${locale}:${slug}`

      if (seen.has(key)) {
        const other = seen.get(key)!
        throw new Error(
          `Duplicated route for locale "${locale}" and slug "${slug}" between sections "${other}" and "${section}".`
        )
      }

      seen.set(key, section)
    }
  }
  return {...routes, __brand: 'SectionRoutes'}
}

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
