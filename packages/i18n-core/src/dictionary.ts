export type LocalizedValue<
  Language extends string,
  TValue
> = Record<Language, TValue>

export type SectionDictionary<
  Section extends string,
  Language extends string,
  TValue
> = Record<
  Section,
  LocalizedValue<Language, TValue>
>
