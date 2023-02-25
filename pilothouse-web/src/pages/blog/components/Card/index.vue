<template>
    <div class="card m-5 w-1/2 flex flex-col items-center rounded-3xl text-left" :style="{ 'background-color': props.bgcolor }"  >
        <div class="title  m-4 text-3xl">
            <slot name="title"></slot>
        </div>
        <div class="text my-8 mx-4 text-base">
            <slot name="text"></slot>
        </div>
    </div>
</template>
<script setup lang="ts">
import { propsData } from '~/pages/blog/components/Card/props'
const props = defineProps(propsData)
</script>
