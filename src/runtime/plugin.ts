import type { Pinia } from 'pinia'
import { defineNuxtPlugin } from '#app'
import { createPiniaUnstorage } from '../index'

export default defineNuxtPlugin({
  name: 'pinia-plugin-unstorage',
  setup({ $pinia }) {
    const options = (useRuntimeConfig().public.piniaUnstorage ?? {});

    ($pinia as Pinia).use(createPiniaUnstorage(options))
  },
})
