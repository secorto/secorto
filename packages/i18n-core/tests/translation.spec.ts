import { describe, expect, it } from 'vitest'
import { buildTranslationIndex } from '@secorto/i18n-core'

describe('buildTranslationIndex', () => {
  it('groups entries by translation key and locale', () => {
    const esEntry = {
      translationKey: 'playwright-guide',
      locale: 'es',
      cleanId: 'guia-playwright'
    }

    const enEntry = {
      translationKey: 'playwright-guide',
      locale: 'en',
      cleanId: 'playwright-guide'
    }

    const index = buildTranslationIndex([
      esEntry,
      enEntry
    ])

    expect(
      index['playwright-guide'].es
    ).toBe(esEntry)

    expect(
      index['playwright-guide'].en
    ).toBe(enEntry)
  })

  it('throws on duplicate translation key and locale', () => {
    expect(() =>
      buildTranslationIndex([
        {
          translationKey: 'playwright-guide',
          locale: 'es'
        },
        {
          translationKey: 'playwright-guide',
          locale: 'es'
        }
      ])
    ).toThrow()
  })
})

it('supports content available in only one locale', () => {
  const esEntry = {
    translationKey: 'playwright-guide',
    locale: 'es',
    cleanId: 'guia-playwright'
  }

  const index = buildTranslationIndex([
    esEntry
  ])

  expect(
    index['playwright-guide'].es
  ).toBe(esEntry)

  expect(
    index['playwright-guide'].en
  ).toBeUndefined()
})
