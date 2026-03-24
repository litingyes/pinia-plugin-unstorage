import localStorageDriver from 'unstorage/drivers/localstorage'

export default defineNuxtConfig({
    modules: ['../../src/module', '@pinia/nuxt'],

    piniaUnstorage: {
        namespace: 'aaa',
        driver: () => localStorageDriver({ base: 'app:' }),
    },

    devtools: { enabled: true },
})
