import 'nuxt/config'

declare module 'nuxt/config' {
  interface NuxtConfig {
    tailwindcss?: any;
    seo?: any;
    strapi?: any;
    fonts?: {
      google?: {
        families?: Record<string, number[]>
      }
    };
  }
}