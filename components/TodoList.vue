<template>
  <div>
    <ul class="flex flex-col justify-start items-start my-4">
      <TodoItem :id="todo.id" :key="todo.id" v-for="todo in todoList" :todo="todo"></TodoItem>
    </ul>
    <div class="flex flex-row justify-end items-end my-2">
      <button class="px-8 py-2 mx-4 bg-red-500 text-gray-100 text-lg rounded-md focus:border-4 border-red-300"
              v-if="tabsStore.activeTab === Tab.Completed" @click="todoStore.removeAllTodos()">
        Add
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