<template>
    <div class="right-header  bg-blue-400 flex flex-col items-center w-1/5 text-white">
        <p class="data w-4/5 my-4 text-2xl">Live Statistics</p>
        <div class="score w-full flex flex-col items-center">
            <div class="img1"></div>
            <div class="team text-3xl my-4" v-for="(item,index) in teamList" :key="index">
                <p class="py-4">{{ item.context }}</p>
                
            </div>
        </div>
        <div class="score w-full flex flex-col items-center">
            <div class="img2"></div>
            <div class="team text-3xl my-4">
                <p class="py-4">KT 0 - 1 MP</p>
                <p class="py-4">ALE 3 - 0 KOM</p>
                <p class="py-4">OME 0 - 5 POL</p>
                <p class="py-4">PLE 2 - 1 VFB</p>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const teamList = reactive([
    {
        context:'KT 0 - 1 MP'
    },
    {
        context:'ALE 3 - 0 KOM'
    },
    {
        context:'OME 0 - 5 POL'
    },
    {
        context:'PLE 2 - 1 VFB'
    },
    ])
</script>
<style>
.score .img1 {
    width: 100px;
    height: 100px;
    margin: 0 20px;
    background: url("~/../public/right-header.png") no-repeat center;
    background-size: contain;
}

.score .img2 {
    width: 150px;
    height: 100px;
    margin: 0 20px;
    background: url("~/../public/csgo.png") no-repeat center;
    background-size: contain;
}
</style>