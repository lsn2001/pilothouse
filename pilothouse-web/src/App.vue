<template>
  <main h-full bg-gray-200 font-sans p="x-5 y-5" text="center gray-700 dark:gray-200">
    <n-config-provider :theme-overrides="themeOverrides" h-full>

      <Menu px-100px mb-50px />

      <router-view />

      <Footer />
    </n-config-provider>
  </main>
</template>

<script setup lang="ts">
import { NConfigProvider, type GlobalThemeOverrides } from 'naive-ui'
/* 设置naive-ui主题 */
const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#ff69b4'
  },
}
</script>