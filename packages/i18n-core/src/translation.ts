/**
 * Represents a localized entry in the translation system.
 * @template T - The type of the content (e.g., { title: string, body: string }).
 * @template C - The section of the application (e.g., 'blog', 'docs').
 * @template L - The language code (e.g., 'es', 'en').
 * @template K - The translation key for the entry (e.g., 'welcomeMessage').
 */
export interface LocalizedEntry<
  T,
  C extends string,
  L extends string,
  K extends string
> {
  cleanId: string
  translationKey: K
  locale: L
  section: C
  entry: T
}

/**
 * Represents a translation index that groups localized entries by their translation key and locale.
 * @template K - The type of the translation key (e.g., 'welcomeMessage').
 * @template L - The type of the language code (e.g., 'es', 'en').
 * @template T - The type of the content (e.g., { title: string, body: string }).
 * @template C - The section of the application (e.g., 'blog', 'docs').
 */
export type TranslationIndex<
  K extends string,
  L extends string,
  T,
  C extends string
> = Record<K, Partial<Record<L, LocalizedEntry<T, C, L, K>>>>

/**
 * Builds a translation index from an array of localized entries.
 * The index groups entries by their translation key and locale.
 * If duplicate entries for the same translation key and locale are found, an error is thrown.
 * @template T - The type of the content (e.g., { title: string, body: string }).
 * @template C - The section of the application (e.g., 'blog', 'docs').
 * @template L - The language code (e.g., 'es', 'en').
 * @param entries Entries to index
 * @returns The translation index, grouped by translation key and locale
 * @throws Error if duplicate entries for the same translation key and locale are found
 */
export function buildTranslationIndex<
  K extends string,
  L extends string,
  T,
  C extends string
>(
  entries: readonly LocalizedEntry<T, C, L, K>[]
): TranslationIndex<K, L, T, C> {
  // Using map to safely mutate internally without lying to TypeScript
  const map = new Map<K, Partial<Record<L, LocalizedEntry<T, C, L, K>>>>()

  for (const entry of entries) {
    const key = entry.translationKey
    const locale = entry.locale

    // Get or create the group for this key
    let group = map.get(key)
    if (!group) {
      group = {}
      map.set(key, group)
    } else if (locale in group) {
      throw new Error(
        `Duplicate translation for key "${key}" and locale "${locale}"`
      )
    }

    // Assign directly to the entry
    group[locale] = entry
  }

  // Object.fromEntries casts natively and implicitly to Record<K, V>
  return Object.fromEntries(map) as TranslationIndex<K, L, T, C>
}
