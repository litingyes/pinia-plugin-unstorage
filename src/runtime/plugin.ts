import { defineNuxtPlugin } from '#app'
import { createPiniaUnstorage } from '../index'

export default defineNuxtPlugin({
  name: 'pinia-plugin-unstorage',
  setup({ vueApp }) {
    const options = useRuntimeConfig().public.piniaUnstorage ?? {}

    const pinia = vueApp.config.globalProperties.$pinia
    pinia.use(createPiniaUnstorage(options))
  },
})
