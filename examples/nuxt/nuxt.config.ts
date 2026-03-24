export default defineNuxtConfig({
    modules: ['../../src/module', '@pinia/nuxt'],

    piniaUnstorage: {
        namespace: 'aaa',
    },

    devtools: { enabled: true },
})
