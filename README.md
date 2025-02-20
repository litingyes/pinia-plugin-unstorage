# pinia-plugin-unstorage

The best persistence plugin for pinia.

## Install

```base
pnpm add pinia-plugin-unstorage
```

## Usage

### Vue app

```ts
import { createPinia } from 'pinia'
import { createPiniaUnstorage } from 'pinia-plugin-unstorage'

const pinia = createPinia()
pinia.use(createPiniaUnstorage())
```

## How to persist

The persistence logic of this plugin is implemented based on [unstorage](https://unstorage.unjs.io/), which provide unified key-value storage API. Based on this, you can even persist the data to the database
