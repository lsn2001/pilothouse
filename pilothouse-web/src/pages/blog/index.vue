<template>
    <div class="nav flex flex-col items-center">
        <NavBar></NavBar>
        <div class="main-info flex justify-between w-full">
            <LeftHeader>
                
            </LeftHeader>
            <Middle :channelList="channelList"></Middle>
            <RightHeader></RightHeader>
        </div>
    </div>
</template>

<script lang="ts" setup>

import 'md-editor-v3/lib/style.css';
import NavBar from '~/pages/blog/components/NavBar/index.vue';
import LeftHeader from '~/pages/blog/components/Left/index.vue'
import Middle from '~/pages/blog/components/Middle/index.vue'
import RightHeader from '~/pages/blog/components/Right/index.vue'
const channelList = reactive([

    {
        img: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
        number: 45.235,
    },
    {
        img: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
        number: 75.458,
    },
    {
        img: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
        number: 15.084,
    },
    {
        img: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
        number: 1.782,
    },
    {
        img: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
        number: 2.563,
    }
])
</script>
<style>

</style>