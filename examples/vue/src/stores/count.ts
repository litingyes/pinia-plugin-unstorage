import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCountStore = defineStore('count', () => {
  const count = ref(1)
  const add = () => ++count.value

  const str = ref('s')
  const append = () => `${str.value}s`

  return {
    count,
    add,

    str,
    append,
  }
}, {
  unstorage: {
    omit: ['str'],
  },
})
