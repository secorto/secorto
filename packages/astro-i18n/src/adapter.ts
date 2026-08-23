import { type LocalizedEntry, type Locales } from '@secorto/i18n-core'

export interface GenericCollectionEntry<
  C extends string, 
  TData
> {
  id: string;
  collection: C;
  data: TData;
}

/**
 * Extracts the locale and cleanId from an entryId of the form "es/my-post".
 * Locale validation is delegated to the Locales value object.
 *
 * @param entryId Raw entry identifier (e.g., "es/my-post")
 * @param locales Locales value object created via createLocales()
 * @returns An object containing the validated locale and cleanId
 * @throws Error if the entryId is malformed or the locale is invalid
 */
export function extractCleanId<L extends string>(
  entryId: string,
  locales: Locales<L>
): { locale: L; id: string } {
  if (!entryId) {
    throw new Error('entryId cannot be empty')
  }

  const firstSlash = entryId.indexOf('/')
  if (firstSlash <= 0) {
    throw new Error(`Invalid entryId "${entryId}" — missing locale prefix`)
  }

  const rawLocale = entryId.slice(0, firstSlash)
  const locale = locales.fromString(rawLocale)

  const cleanId = entryId.slice(firstSlash + 1)

  return { locale, id: cleanId }
}

export function resolveTranslationKey<T extends object>(
  data: T,
  cleanId: string
): string {
  return 'translationKey' in data &&
    typeof (data as Record<string, unknown>).translationKey === 'string'
    ? (data as Record<string, unknown>).translationKey as string
    : cleanId
}

export function adaptToLocalizedEntry<
  T extends object, 
  C extends string, 
  L extends string
>(
  // Pasamos C y T para amarrar la colección y el esquema de datos exacto
  entry: GenericCollectionEntry<C, T>, 
  locales: Locales<L>
): LocalizedEntry<T, C, L> {
  const { locale, id: cleanId } = extractCleanId(entry.id, locales);
  
  return {
    cleanId,
    locale,
    section: entry.collection,
    translationKey: resolveTranslationKey(entry.data, cleanId),
    entry: entry.data
  };
}