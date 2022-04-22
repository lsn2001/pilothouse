<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
import axios from "@/lib/axios";
import { onMounted } from "vue";

onMounted(() => {
  axios
    .get("/home/hello")
    .then((res: any) => {
      console.log(res.data);
    })
    .catch((err: any) => {
      console.log(err);
    });
});
async function queryFun(): Promise<string> {
  return "queryFun";
}
</script>

<template>
  <span class="color">test</span>
  <button class="
      py-2
      px-4
      font-semibold
      rounded-lg
      shadow-md
      text-white
      bg-green-500
      hover:bg-green-700
      border-none
      cursor-pointer
    ">
    Click me
  </button>
</template>

<style lang="scss">
</style>
