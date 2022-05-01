<script setup lang="ts">
import { isDark, toggleDark } from '~/composables'
</script>

<template>
  <button class="icon-btn !outline-none" @click="toggleDark()">
    <div v-if="isDark" i-carbon-moon />
    <div v-else i-carbon-sun />
  </button>
</template>
