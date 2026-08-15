import { describe, it, expect } from 'vitest'
import { getEntryURL, getSectionURL, SectionRoutes } from '@secorto/i18n-core'

const routes = {
  blog: {
    es: 'blog',
    en: 'blog'
  },
  talk: {
    es: 'charla',
    en: 'talk'
  }
} satisfies SectionRoutes<'blog'|'talk', 'en'|'es'>

describe('getSectionURL', () => {
  it('builds localized section urls', () => {
    expect(
      getSectionURL(routes, 'talk', 'es')
    ).toBe('/es/charla')

    expect(
      getSectionURL(routes, 'talk', 'en')
    ).toBe('/en/talk')
  })
})

describe('getEntryURL', ()=> {
  it('getEntryURL builds full url for entry with locale prefix', () => {
    expect(getEntryURL(routes, 'blog', 'es', 'my-post')).toBe('/es/blog/my-post')
    expect(getEntryURL(routes, 'talk', 'en', 'my-talk')).toBe('/en/talk/my-talk')
  })
})
