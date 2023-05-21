import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(23)
  const todoList = ref([])
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
  async function getTodos() {
    console.log('getTodos')
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos/')
    console.log(res.data);
    todoList.value = res.data;
  }
  return { count, evenOrOdd, increment, decrement, todoList, getTodos }
})
