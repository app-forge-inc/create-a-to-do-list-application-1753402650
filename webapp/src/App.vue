<template>
  <div id="app" class="bg-gray-100 min-h-screen">
    <div class="container mx-auto p-4">
      <h1 class="text-3xl font-bold text-center text-gray-800 mb-8">To-Do List</h1>
      <TodoList />
    </div>
  </div>
</template>

<script setup lang="ts">
import TodoList from './components/TodoList.vue'
</script>
