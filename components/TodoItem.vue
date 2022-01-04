<template>
  <li class="todo-item">
    <div class="w-full flex flex-row justify-between">
      <div class="flex items-start">
        <div class="flex items-center h-6">
          <input :id="todo.id" :name="todo.id" type="checkbox" v-model="todo.completed"
                 class="focus:ring-indigo-500 h-5 w-5 text-indigo-600 border-gray-300 rounded" @click="toggle">
        </div>
        <div class="ml-3 text-sm">
          <label :for="todo.id" class="text-xl text-gray-700 tracking-wider"
                 :class="{'completed':todo.completed}" v-text="todo.title"></label>
        </div>
      </div>
      <div class="ml-auto mr-8 flex " v-if="tabsStore.activeTab === Tab.Completed">
        <button class="text-gray-700 hover:text-gray-800" @click="todoStore.removeTodo(todo)">
          <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path fill="currentColor"
                  d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z"/>
          </svg>
        </button>
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
import {useTodoStore, useTabsStore} from '@/store';
import {Tab} from "~/model/tab.model";
import {ITodo} from "~/model/todo.model";
import {PropType} from "@vue/runtime-core";

const props = defineProps({
  todo: {
    type: Object as PropType<ITodo>,
    required: true,
  }
});
const todoStore = useTodoStore();
const tabsStore = useTabsStore();

const toggle = () => {
  todoStore.toggleTodo(props.todo);
};
</script>

<style lang="scss">
.todo-item {
  @apply relative flex flex-row justify-between w-full items-center  mx-4 my-1;
  .completed {
    @apply line-through ;
  }
}
</style>