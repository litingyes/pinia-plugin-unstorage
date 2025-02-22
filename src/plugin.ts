import type { PiniaPlugin } from 'pinia'
import type { Driver } from 'unstorage'
import { destr } from 'destr'
import localStorageDriver from 'unstorage/drivers/localstorage'
import { omit, pick } from 'usexx'
import { isClient, toRaws } from './utils'

declare module 'pinia' {
  // eslint-disable-next-line unused-imports/no-unused-vars
  export interface DefineStoreOptionsBase<S, Store> {
    unstorage?: {
      pick?: string[]
      omit?: string[]
    }
  }
}

export interface UnstorageOptions {
  namespace?: string
  driver?: Driver
}

export const DEFAULT_UNSTORAGE_OPTIONS: UnstorageOptions = {
  namespace: 'pinia',
}

function extractData(data: Record<string, unknown>, pickKeys?: string[], omitKeys?: string[]) {
  if (pickKeys?.length) {
    return pick(data, pickKeys)
  }

  if (omitKeys?.length) {
    return omit(data, omitKeys)
  }

  return data
}

export function createPiniaUnstorage(_globalOptions?: UnstorageOptions) {
  const globalOptions = Object.assign(DEFAULT_UNSTORAGE_OPTIONS, _globalOptions)
  let storage = globalOptions.driver

  if (!storage && isClient) {
    storage = localStorageDriver({
      base: globalOptions.namespace,
    })
  }

  return (({ store, options }) => {
    const { pick: pickKeys, omit: omitKeys } = options.unstorage ?? {}

    Promise.resolve(storage?.getItem(store.$id)).then((val) => {
      const data = destr<Record<string, unknown>>(val)

      store.$patch(extractData(data, pickKeys, omitKeys))
    })

    store.$subscribe(async (_, state) => {
      await storage?.setItem!(store.$id, JSON.stringify(extractData(toRaws(state), pickKeys, omitKeys)), {})
    })
  }) as PiniaPlugin
}
