// https://nuxt.com/docs/api/configuration/nuxt-config

import i18nConfig from './config/i18n.config';
import seoConfig from './config/seo.config'
import strapiConfig from './config/strapi.config'
import tailwindConfig from './config/tailwind.config';
import headConfig from './config/head.config'

export default defineNuxtConfig({
  // css: ['@/assets/styles/main.scss'],
  compatibilityDate: '2024-11-01',
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxtjs/seo',
    '@nuxt/icon',
    '@nuxtjs/strapi',
    '@nuxt/fonts',
    '@nuxt/image',
    '@pinia/nuxt'
  ],
  i18n: i18nConfig,
  seo: seoConfig,
  strapi: strapiConfig,
  tailwindcss: {
    configPath: tailwindConfig,
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
