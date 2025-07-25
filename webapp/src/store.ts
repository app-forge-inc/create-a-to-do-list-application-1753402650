import { reactive } from 'vue'

export interface Todo {
  id: number
  text: string
  completed: boolean
}

let nextTodoId = 1

export const store = reactive({
  todos: [] as Todo[],

  addTodo(text: string) {
    this.todos.push({
      id: nextTodoId++,
      text,
      completed: false,
    })
  },

  toggleTodo(id: number) {
    const todo = this.todos.find(t => t.id === id)
    if (todo) {
      todo.completed = !todo.completed
    }
  },

  removeTodo(id: number) {
    this.todos = this.todos.filter(t => t.id !== id)
  },
})
