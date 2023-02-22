<template>
            <div class="card" :style="{'background-color':props.bgcolor}">
                
                    <div class="title"><slot name="title"></slot></div>
                    <div class="text"><slot name="text"></slot></div>
                </div>
</template>
<script setup lang="ts">
import {propsData} from '~/pages/blog/props'
    const props = defineProps(propsData)
</script>
<style>


 .recommend .card {
    margin: 0 20px;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 30px;
}

.card .title{
    margin: 15px 20px;
    text-align: left;
}
.card .text{
    margin: 30px 20px;
    text-align: left;
}
</style>