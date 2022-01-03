<template>
  <ul class="flex justify-around items-center my-4 border-b-2">
    <template v-for="tab in tabsStore.tabs" :key="tab">
      <li class="cursor-pointer py-2 px-4 text-gray-500"
          :class="tabsStore.activeTab===tab ? 'border-blue-500 border-b-4 rounded-a-sm' : ''"
          @click="tabsStore.setActiveTab(tab)"
          v-text="tab"></li>
    </template>
  </ul>
</template>

<script setup lang="ts">
import {useTabsStore} from "~/store";
import {onMounted} from "vue";

const tabsStore = useTabsStore();
onMounted(() => {
  tabsStore.readActiveTab();
})
</script>