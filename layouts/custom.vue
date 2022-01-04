<template>
  <div class="home">
    <nav class="flex flex-col justify-center items-center">
      <div class="mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between my-4">
          <slot name="header">
            <h1>Todo</h1>
          </slot>
        </div>
      </div>
    </nav>
    <div class="mx-auto lg:w-1/2 md:w-4/5 sm:w-5/6 flex flex-col">
      <slot name="todo">
        <p>This is the default layout for the Hello World application.</p>
      </slot>
    </div>
    <div class="footer">
      <slot name="footer">
          <p>created by <a href="http://github.com/yacosta738" class="font-bold text-gray-500">{{ username }}</a> - devChallenges.io</p>
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
.home{
  font-family: Montserrat;
  @apply min-h-full flex flex-col justify-center items-center mx-auto;
}
.footer {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  @apply flex flex-row  text-center text-sm text-gray-400 font-sans absolute bottom-4;

}
</style>