<template>
    <div w-full flex>
        <div flex flex-col items-center rounded-10px flex-2 bg-white bg-opacity-40 pt-50px>
            <span text-25 font-extrabold mb-20px>Welcome To PILOTHOUSE</span>
            <span text-5 font-extrabold mb-50px pl-20px> pilothouse 驾驶室 vue3 midway博客项目 提供博客记录和工作的便利</span>
            <div w-500px flex justify-start mb-50px>
                <n-button ghost color="#ff69b4" w-170px h-40px>
                    <span>GET STARTED</span>
                    <div class="i-carbon-location-current" />
                </n-button>
            </div>
        </div>
        <div rounded-10px flex-1 bg-pink-300 bg-opacity-40 ml-10>
            <Calendar h-400px />
        </div>
    </div>
</template>
<script setup lang="ts">
import Calendar from '~/components/Calendar.vue';
</script>