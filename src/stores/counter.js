import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(23)
  const evenOrOdd = computed(() => {
    if (count.value % 2 === 0) return 'Even'
    else return 'Odd'
  })
  function increment() {
    console.log('increment')
    count.value++
  }
  const decrement= () => {
    count.value--
  }
  return { count, evenOrOdd, increment, decrement }
})
