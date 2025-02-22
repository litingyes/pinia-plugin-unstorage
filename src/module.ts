import type { UnstorageOptions } from './plugin'
import { addPlugin, createResolver, defineNuxtModule, hasNuxtModule, useLogger } from '@nuxt/kit'

export default defineNuxtModule<UnstorageOptions>({
  meta: {
    name: 'pinia-plugin-unstorage',
    configKey: 'piniaUnstorage',
  },
  defaults: {},
  setup(options, nuxt) {
    if (!hasNuxtModule('@pinia/nuxt')) {
      const logger = useLogger()
      logger.warn('The `@pinia/nuxt` module was not found, `pinia-plugin-unstorage` will not work.')

      return
    }

    nuxt.options.runtimeConfig.public.piniaUnstorage = options

    const resolver = createResolver(import.meta.url)

    addPlugin(resolver.resolve('./runtime/plugin'))
  },
})
