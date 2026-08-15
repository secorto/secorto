export type TranslationGroup<
  Language extends string,
  Entry
> = Partial<Record<Language, Entry>>

export type TranslationIndex<
  Language extends string,
  Entry
> = Record<
  string, // translationKey
  TranslationGroup<Language, Entry>
>

export interface TranslationReference<
  Language extends string
> {
  translationKey: string
  locale: Language
}

export function buildTranslationIndex<
  Language extends string,
  Entry extends TranslationReference<Language>
>(
  entries: readonly Entry[]
): TranslationIndex<Language, Entry> {
  const index: TranslationIndex<Language, Entry> = {}

  for (const entry of entries) {
    const group = index[entry.translationKey] ??= {}

    if (group[entry.locale]) {
      throw new Error(
        `Duplicate translation for key "${entry.translationKey}" and locale "${entry.locale}"`
      )
    }

    group[entry.locale] = entry
  }

  return index
}
