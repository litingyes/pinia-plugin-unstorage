import { addPlugin, createResolver, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'pinia-plugin-unstorage',
    configKey: 'unstorage',
  },
  defaults: {},
  setup() {
    const resolver = createResolver(import.meta.url)

    addPlugin(resolver.resolve('./runtime/plugin'))
  },
})
