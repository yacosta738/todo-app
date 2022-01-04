<template>
  <div>
    <ul class="flex flex-col justify-start items-start my-4">
      <TodoItem :id="todo.id" :key="todo.id" v-for="todo in todoList" :todo="todo"></TodoItem>
    </ul>
    <div class="flex flex-row justify-end items-end my-2">
      <button
          class="px-8 py-1 mx-4 flex justify-between items-center bg-red-500 text-gray-100 text-lg rounded focus:border-4 border-red-300"
          v-if="tabsStore.activeTab === Tab.Completed" @click="todoStore.removeAllTodos()">
        <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path fill="currentColor"
                d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z"/>
        </svg>
        delete all
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import TodoItem from "./TodoItem.vue";
import {useTabsStore, useTodoStore} from '@/store';
import {ITodo} from "~/model/todo.model";
import {computed} from "vue";
import {Tab} from "~/model/tab.model";

const todoStore = useTodoStore();
const tabsStore = useTabsStore();
const todoList = computed<ITodo[]>(() => {
  switch (tabsStore.activeTab) {
    case Tab.All:
      return todoStore.getAllTodos;
    case Tab.Active:
      return todoStore.getUncompletedTodos;
    case Tab.Completed:
      return todoStore.getCompletedTodos;
    default:
      return todoStore.getAllTodos;
  }
});
</script>