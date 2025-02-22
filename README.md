# pinia-plugin-unstorage

The best persistence plugin for pinia.

> [!TIP]
> The persistence logic of this plugin is implemented based on [unstorage](https://unstorage.unjs.io/), which provide unified key-value storage API. Based on this, you can even persist the data to the database

## Install

```bash
pnpm add pinia-plugin-unstorage
```

## Usage

### Vue app

```ts
import { createPinia } from 'pinia'
import { createPiniaUnstorage } from 'pinia-plugin-unstorage'

const pinia = createPinia()
pinia.use(createPiniaUnstorage({
  // UnstorageOptions
}))
```

### Nuxt app

```ts
export default defineNuxtConfig({
  modules: ['@pinia/nuxt', 'pinia-plugin-unstorage/nuxt'],
  piniaUnstorage: {
    // UnstorageOptions
  },
})
```

## Options

### Plugin options

```ts
interface UnstorageOptions {
  namespace: string // prefix str to as storage key
  driver: Driver // the storage instance in unstorage
}
```

### Store options

```ts
export const useStore = defineStore('store', () => {
  // ...
}, {
  unstorage: {
    pick: [], // string[], state keys picked to storage
    omit: [] // string[], state keys omitted fot storage
  }
})
```
