<template>
  <li class="todo-item">
    <div class="w-full flex flex-row justify-between">
      <div class="flex items-start">
        <div class="flex items-center h-5">
          <input :id="todo.id" :name="todo.id" type="checkbox" v-model="todo.completed"
                 class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" @click="toggle">
        </div>
        <div class="ml-3 text-sm">
          <label :for="todo.id" class="text-gray-700 tracking-wider"
                 :class="{'completed':todo.completed}" v-text="todo.title"></label>
        </div>
      </div>
      <div class="ml-auto mr-8 flex " v-if="tabsStore.activeTab === Tab.Completed">
        <button class="text-gray-700 hover:text-gray-800" @click="todoStore.removeTodo(todo)">
          <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clip-rule="evenodd"/>
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