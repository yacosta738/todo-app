<template>
  <div class="min-h-full flex flex-col justify-center items-center mx-auto">
    <nav class="flex flex-col justify-center items-center">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between my-4">
          <slot name="header" class="header">
            <h1>Todo</h1>
          </slot>
        </div>
      </div>
    </nav>
    <div class="mx-auto w-2/6 flex flex-col">
      <slot name="todo">
        <p>This is the default layout for the Hello World application.</p>
      </slot>
    </div>
    <div class="absolute bottom-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <slot name="footer">
        <p>created by <a href="http://github.com/yacosta738" class="font-bold">{{ username }}</a> - devChallenges.io</p>
      </slot>
    </div>
  </div>
</template>
<script setup lang="ts">
const username = "@yacosta738";
</script>
<script lang="ts">
export default {
  layout: "custom",
};
</script>
<style lang="scss" scoped>
.home {
  @apply container mx-auto flex flex-col items-center justify-center h-screen bg-gray-100;
  .header {
    @apply absolute top-0 left-0 right-0 z-10 flex flex-col items-center justify-center bg-red-500 text-white text-center;
    h1 {
      @apply text-3xl font-black;
    }
  }
}

.footer {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  @apply justify-center text-center text-sm text-gray-200 font-sans absolute inset-x-0 bottom-0 h-16;

}
</style>