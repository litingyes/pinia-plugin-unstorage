import type { UnstorageOptions } from './plugin'
import { addPlugin, createResolver, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule<UnstorageOptions>({
  meta: {
    name: 'pinia-plugin-unstorage',
    configKey: 'piniaUnstorage',
  },
  defaults: {},
  setup(options, nuxt) {
    nuxt.options.runtimeConfig.public.piniaUnstorage = options

    const resolver = createResolver(import.meta.url)

    addPlugin(resolver.resolve('./runtime/plugin'))
  },
})
