<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)


// const menuOptions: MenuOption[] = [

//   {
//     label: () =>
//       h(
//         RouterLink,
//         {
//           to: {
//             name: 'BlogIndex',
//           }
//         },
//         '博客'
//       ),
//     key: 'blog',
//     icon: renderIcon('moon')
//   }, {
//     label: () =>
//       h(
//         RouterLink,
//         {
//           to: {
//             name: 'OtherIndex',
//           }
//         },
//         '其他能力'
//       ),
//     key: 'other',
//     icon: renderIcon('moon')
//   },
// ]
</script>

<template>
  <div>
    <button @click="toggleDark()">
      <i inline-block align-middle i="dark:carbon-moon carbon-sun" />

      <span class="ml-2">{{ isDark ? 'Dark' : 'Light' }}</span>
    </button>
    TODO::顶部导航
  </div>
</template>
