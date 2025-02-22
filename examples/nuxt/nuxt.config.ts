export default defineNuxtConfig({
  modules: ['../../src/module', '@pinia/nuxt'],
  piniaUnstorage: {
    namespace: 'aaa',
  },
  devtools: { enabled: true },
  compatibilityDate: '2025-02-22',
})
