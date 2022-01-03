<template>
  <NuxtLayout name="custom">
    <template #header>
      <div class="header">
        <div class="container">
          <div class="flex flex-col justify-center items-center">
            <h1 class="text-4xl font-black">
              Todo App
            </h1>
          </div>
        </div>
      </div>
    </template>
    <template #todo>
      <Tabs/>
      <AddTodoItem/>
      <TodoList/>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import {onMounted} from 'vue';
import {useTodoStore} from '@/store'

const todoStore = useTodoStore();
onMounted(() => {
  todoStore.readTodos();
})

</script>