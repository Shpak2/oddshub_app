import type { NuxtI18nOptions } from '@nuxtjs/i18n'

const i18nConfig: NuxtI18nOptions = {
  locales: [
    { code: 'en', iso: 'en-US', file: 'en.json' },
    // { code: 'uk', iso: 'uk-UA', file: 'uk.json' }
  ],
  defaultLocale: 'en',
  langDir: 'locales/',
  // vueI18n: { fallbackLocale: 'en' }
}

export default i18nConfig
