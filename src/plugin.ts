import type { PiniaPlugin } from 'pinia'
import type { Driver } from 'unstorage'
import { destr } from 'destr'
import localStorageDriver from 'unstorage/drivers/localstorage'
import { toRaws } from './utils'

export interface UnstorageOptions {
  namespace?: string
  driver?: Driver
}

export const DEFAULT_UNSTORAGE_OPTIONS: UnstorageOptions = {
  namespace: 'pinia',
}

export function createPiniaUnstorage(_globalOptions?: UnstorageOptions) {
  const globalOptions = Object.assign(DEFAULT_UNSTORAGE_OPTIONS, _globalOptions)
  const storage = globalOptions.driver
    ? globalOptions.driver
    : localStorageDriver({
        base: globalOptions.namespace,
      })

  return (({ store }) => {
    Promise.resolve(storage.getItem(store.$id)).then((val) => {
      store.$patch(destr(val))
    })

    store.$subscribe(async (_, state) => {
      await storage.setItem!(store.$id, JSON.stringify(toRaws(state)), {})
    })
  }) as PiniaPlugin
}
