<template>
<p>about</p>
<button @click="counterStore.increment">{{ counterStore.count }}</button>
<ChildComp />
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'
import ChildComp from '@/components/ChildComp.vue'
const counterStore = useCounterStore();
</script>
