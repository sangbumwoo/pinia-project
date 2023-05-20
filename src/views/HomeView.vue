<template>
  <main>
    <p>home</p>
    <p>{{ counterStore.count }}</p>
    <div>
      <button @click="counterStore.decrement">-</button>
      <button @click="counterStore.increment">+</button>
    </div>
    <p>{{ counterStore.evenOrOdd }}</p>
  </main>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'
const counterStore = useCounterStore()
</script>
