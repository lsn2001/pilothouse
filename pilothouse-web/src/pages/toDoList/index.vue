<template>
  <div ml-40px mr-40px>
    <pills />
    <div w-full flex>
      <div mr-20px bg-white flex-1 h-500px>
        <toDoContainer />
      </div>
      <div rounded-lg ml-20px bg-white flex-1 h-500px>222</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import pills from './component/pills/index.vue'
import toDoContainer from './component/toDoContainer/index.vue'
</script>
