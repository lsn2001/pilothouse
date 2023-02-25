<template>
    <div class="left-header flex flex-col items-center bg-blue-400 text-white w-1/5">
        <p class="winner w-full my-4 text-2xl">This Month Winner</p>
        <div class="people">
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
            <p class="name text-2xl my-4 text-blue-700">{{ name }}</p>
        </div>
        <div class="list my-8 text-3xl w-4/5">
            <div class="Home py-4 flex justify-center">
                <span>Home</span>
            </div>
            <div class="Live py-4 flex justify-center">
                <span>Live</span>
            </div>
            <div class="Games py-4 flex justify-center items-center">
                <span>Games</span>
                <arrow ml-6 />
            </div>
        </div>
        <div class="list-game my-8 text-3xl w-4/5 flex flex-col items-center">
            <div class="Home flex items-center py-4">
                <img w-12 h-12 mx-4 src="/right-header.png" alt="" srcset="">
                <span>Valorant</span>
            </div>
            <div class="Live flex items-center py-4">
                <img src="/csgo.png" w-16 h-12 mx-2>
                <span>CS&GO</span>
            </div>
            <div class="Games flex items-center py-4">
                <span>BrawlHalla</span>
            </div>
            <div class="More flex items-center py-4 my-8">
                <img src="" alt="" srcset="">
                More Game
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import arrow from '~/assets/svg/nav-right/arrow.svg?component'
const name = ref('KeazoN Team');
</script>
