<template>
  <NuxtLayout name="custom">
    <template #header>
      <div class="header">
        <div class="container">
          <div class="flex flex-col justify-center items-center">
            <h1 class="title">
              #todo
            </h1>
          </div>
        </div>
      </div>
    </template>
    <template #todo>
      <Tabs/>
      <AddTodoItem v-if="tabsStore.activeTab !== Tab.Completed"/>
      <TodoList/>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import {onMounted} from 'vue';
import {Tab} from "~/model/tab.model";
import {useTodoStore, useTabsStore} from '@/store'

const todoStore = useTodoStore();
const tabsStore = useTabsStore();
onMounted(() => {
  todoStore.readTodos();
})
</script>

<style lang="scss" scoped>
.title {
  font-family: "Raleway", sans-serif;
  @apply text-center text-5xl;
}
</style>