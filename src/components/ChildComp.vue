<template>
    <h3>child</h3>
    <p>{{ counterStore.count }}</p>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter.js'
const counterStore = useCounterStore();
</script>