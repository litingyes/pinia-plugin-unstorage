import { toRaw } from 'vue'

export function toRaws(obj: Record<string, unknown>) {
  return Object.fromEntries(Object.entries(obj).map(([key, val]) => [key, toRaw(val)]))
}

export const isClient = window !== undefined
