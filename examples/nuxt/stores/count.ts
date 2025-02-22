export const useCountStore = defineStore('count', () => {
  const count = ref(1)
  const add = () => ++count.value

  return {
    count,
    add,
  }
})
