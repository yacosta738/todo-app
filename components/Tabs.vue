<template>
  <ul class="flex justify-around items-center my-4 border-b-2 w-full">
    <template v-for="tab in tabsStore.tabs" :key="tab">
      <li class="flex flex-col justify-center items-center cursor-pointer px-4 text-gray-500 text-2xl"
          @click="tabsStore.setActiveTab(tab)">
        {{tab}}
        <div :class="tabsStore.activeTab===tab? 'w-32 h-1 border-[1px] bg-blue-500 border-blue-500 rounded-t-lg':''"></div>
      </li>
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