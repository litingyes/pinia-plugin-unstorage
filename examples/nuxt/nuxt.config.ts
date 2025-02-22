export default defineNuxtConfig({
  ssr: false,
  modules: ['../../src/module', '@pinia/nuxt'],
  unstorage: {},
  devtools: { enabled: true },
  compatibilityDate: '2025-02-22',
})
