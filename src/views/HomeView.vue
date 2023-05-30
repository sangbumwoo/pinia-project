<template>
  <main>
    <p>home</p>
    <p>{{ counterStore.count }}</p>
    <div>
      <button @click="counterStore.decrement">-</button>
      <button @click="counterStore.increment">+</button>
    </div>
    <p>{{ counterStore.evenOrOdd }}</p>
    <hr>
    <button @click="todoStore.getAllTodos">getAllTodos</button>
    <button @click="todoStore.clearTodos">clearTodos</button>
    <!-- <div>{{ counterStore.todoList }}</div> -->
    <ul>
      <li v-for="todo in todoStore.todoList" :key="todo.id">{{ todo.title }} </li>
    </ul>

  </main>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'
import { useTodoStore } from '@/stores/todo'
import { watch } from 'vue'

const counterStore = useCounterStore()
const todoStore = useTodoStore();
console.log(todoStore);
console.log(todoStore.todoList);
watch(todoStore.todoList, (data) => {
  console.log('watch todoStore.todoList', data)
})
watch(todoStore, (data) => {
  console.log('watch todoStore', data.todoList)
})
</script>
