<template>
  <div class="flex items-center justify-between p-2" :class="{ 'bg-green-100': todo.completed }">
    <span :class="{ 'line-through': todo.completed }" @click="toggleTodo">
      {{ todo.text }}
    </span>
    <button @click="removeTodo" class="text-red-500 hover:text-red-700">Remove</button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import { type Todo } from '../store'

const props = defineProps<{
  todo: Todo
}>()

const emit = defineEmits(['toggle', 'remove'])

const toggleTodo = () => {
  emit('toggle', props.todo.id)
}

const removeTodo = () => {
  emit('remove', props.todo.id)
}
</script>
