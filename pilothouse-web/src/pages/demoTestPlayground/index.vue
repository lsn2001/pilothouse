<template>
    <div w-full flex justify-center items-center>
        <UserCard v-for="(item,i) in cardList" :key="i" :avatar="item.avatar" :name="item.name" :bgcolor="item.bgcolor" :arr="item.arr">
            <template v-slot:icon>
                <img w-30px h-30px ml-20px mt-20px :src="item.icon" alt="" />
            </template>
            <template v-slot:skills>
                <span block>{{item.skills}}</span>
            </template>
            <template v-slot:intro>
                <span inline-block mx-10px>{{item.intro}}</span>
            </template>
        </UserCard>
        
    </div>
</template>
<script setup lang="ts">
import UserCard from '~/components/UserCard.vue';
const cardList: any = reactive([
    {
        avatar: './../imgs/1.png',
        name: 'Guillaume Chau',
        skills: 'Vue / Histoire',
        intro: 'Histoire Deep Dive',
        icon: './../imgs/icon1.svg',
        bgcolor: 'bg-gradient-to-b from-green-300 via-green-400 to-green-500',
        arr:'12',
    },
    {
        avatar: './../imgs/2.png',
        name: 'Vojtech Miksu',
        skills: 'Uber / Ladle',
        intro: 'introducing Ladle:Develop and test your React stories faster',
        icon: './../imgs/icon2.svg',
        bgcolor: 'bg-gradient-to-b from-blue-300 via-blue-400 to-blue-500',
        arr:'13',
    },
    {
        avatar: './../imgs/3.png',
        name: 'lan VanSchooten',
        skills: 'Defined Networking / Storybook',
        intro: 'Developing,Documenting,and Testing your Vite app with Stroybook',
        icon: './../imgs/icon3.svg',
        bgcolor: 'bg-gradient-to-b from-red-300 via-red-400 to-red-500',
        arr:'123',
    }
])
</script>