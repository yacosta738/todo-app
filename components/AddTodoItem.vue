<template>
  <div class="flex flex-row justify-center my-4">
    <input type="text" v-model="newTodo.title" @keyup.enter="add" placeholder="Add details"
           name="todo"
           class="px-4 py-2 mx-4 w-full border border-gray-400 rounded-lg hover:border-blue-400 focus:outline-none text-black text-lg">
    <button :disabled='isDisabled' @click="add"
            type="submit"
            class="px-4 mx-4 bg-blue-500 text-gray-100 text-lg rounded-md focus:border-4 border-blue-300">
      Add
    </button>
  </div>
</template>

<script setup lang="ts">
import {ref, computed, Ref, UnwrapRef} from 'vue';
import {useTodoStore} from '@/store'
import {ITodo, Todo} from "~/model/todo.model";

const todoStore = useTodoStore();
const {addTodo} = todoStore;
let newTodo: Ref<UnwrapRef<ITodo>> = ref(new Todo(""));
const isDisabled = computed(() => {
  return newTodo.value.title.length === 0;
});

const add = (): void => {
  addTodo(newTodo.value);
  newTodo.value = new Todo("");
};
</script>

<style scoped>

</style>