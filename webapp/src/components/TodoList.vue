<template>
  <div class="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
    <div class="flex mb-4">
      <input
        v-model="newTodoText"
        @keyup.enter="addTodo"
        placeholder="Add a new to-do"
        class="flex-grow p-2 border rounded-l-md"
      />
      <button @click="addTodo" class="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600">Add</button>
    </div>
    <div>
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @toggle="toggleTodo"
        @remove="removeTodo"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { store, type Todo } from '../store'
import TodoItem from './TodoItem.vue'

const todos = ref<Todo[]>(store.todos)
const newTodoText = ref('')

const addTodo = () => {
  if (newTodoText.value.trim()) {
    store.addTodo(newTodoText.value)
    newTodoText.value = ''
  }
}

const toggleTodo = (id: number) => {
  store.toggleTodo(id)
}

const removeTodo = (id: number) => {
  store.removeTodo(id)
}
</script>
