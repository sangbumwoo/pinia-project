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
import { useTodoStore} from '@/stores/todo'

const counterStore = useCounterStore()
const todoStore = useTodoStore();
</script>
