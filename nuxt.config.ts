// https://nuxt.com/docs/api/configuration/nuxt-config

import i18nConfig from './config/i18n.config';
import seoConfig from './config/seo.config';
import strapiConfig from './config/strapi.config';
import headConfig from './config/head.config';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxtjs/seo',
    '@nuxt/icon',
    '@nuxtjs/strapi',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/fonts',
    '@pinia/nuxt'
  ],
  i18n: i18nConfig,
  seo: seoConfig,
  strapi: strapiConfig,
  fonts: {
    google: {
      families: {
        'Open Sans': [400, 600, 700] // або інші ваги, які вам потрібні
      }
    }
  },
  tailwindcss: {
    configPath: './config/tailwind.config',
    quiet: true,
  },
  app: {
    head: {
      title: headConfig.title,
      link: headConfig.link
    }
  },
  devtools: { enabled: true }
})
