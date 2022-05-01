<script setup lang="ts">
import type { MenuOption } from 'naive-ui'
import { RouterLink } from 'vue-router'
import { type Ref } from 'vue'
const activeKey: Ref<string | null> = ref(null)

function renderIcon(icon: string) {
  return () => h('div', {
    class: `i-carbon-${icon}`
  })
}

const menuOptions: MenuOption[] = [

  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'BlogIndex',
          }
        },
        '博客'
      ),
    key: 'blog',
    icon: renderIcon('moon')
  }, {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'OtherIndex',
          }
        },
        '其他能力'
      ),
    key: 'other',
    icon: renderIcon('moon')
  },
]
</script>

<template>
  <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" />
</template>
