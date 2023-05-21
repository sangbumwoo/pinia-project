import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";



export const useTodoStore = defineStore('todo', () => {
    const todoList = ref([]);
    async function getAllTodos() {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos/')
        todoList.value = res.data;
    }

    const clearTodos = () => {
        todoList.value = [];
    }

    return { todoList, getAllTodos, clearTodos }
})
