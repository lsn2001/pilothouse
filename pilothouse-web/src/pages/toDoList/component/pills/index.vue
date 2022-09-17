<template>
    <div v-if="pillShow" h-50px rounded-full py-3 px-6 bg-white mb-40px flex items-center text-4xl>
        <span>
            GOOD AFTERNOON ,4xii
        </span>
        <n-divider vertical />
        <!-- 关闭药丸框 -->
        <div @click="close" ml-10px inline-block i-carbon-close-filled></div>
        <div ml-10px inline-block i-carbon-arrows-vertical></div>
        <div ml-10px inline-block i-carbon-add-alt></div>
    </div>
</template>
<script setup lang="ts">
const pillShow = ref(true)
const close = () => {
    pillShow.value = false
}
</script>
