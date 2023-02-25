<template>
    <div class="middle w-2/3 flex bg-yellow-200 flex-col items-center text-white">
        <div class="tournaments flex flex-col item-center w-4/5">
            <div class="div1 w-full bg-green-600  transition duration-700 ease-in-out hover:bg-red-700 hover:scale-110 rounded-2xl my-12"><p class="title text-3xl my-8 mx-4 text-left w-2/5">The only address for tournaments.</p></div>      
        </div>
        <div class="channel w-9/10">
            <p class="title text-3xl text-left my-4">Live Channel</p>
            <div class="channel-lists bg-purple-700 w-full rounded-full flex items-center justify-center">
                <img class="arrow w-8 bg-white rounded-3xl mx-8" src="https://api.iconify.design/carbon:arrow-left.svg" alt="" srcset="">
                <ul v-for="(item, index) in props.channelList" :key="index" class="my-8 w-1/5" >
                    <li><el-avatar :src="item.img" />
                        <p>{{ item.number }}</p>
                    </li>
                </ul>
                <img class="arrow w-8 bg-white rounded-3xl mx-8" src="https://api.iconify.design/carbon:arrow-right.svg" alt="" srcset="">
            </div>
        </div>
        <div class="recommend w-9/10 flex justify-between my-4 " v-for="(item, i) in cardList" :key="i" >
            <Card v-for="(list,index) in item" :key="index" :bgcolor="list.bgcolor" :title="list.title"
                :text="list.text">
                <template v-slot:title>
                    {{ list.title }}
                </template>
                <template v-slot:text>
                    {{ list.text }}
                </template>
            </Card>
        </div>
    </div>
</template>
<script setup lang="ts">
import { type PropType } from 'vue';
import Card from '~/pages/blog/components/Card/index.vue';
const props = defineProps({
    channelList: {
        type: Array as PropType<Array<any>>
    }
})
const cardList: any = reactive([
    [{
        bgcolor: '#892CDC',
        title: 'Build your team andstart the tournaments.',
        text: "Lorem lpsum is simply dummy text of theprinting and typesetting industry. Lorempsum has been the industry's standarddummy text ever since the 1500s, when alunknown printer took a galley of type andscrambled it to make a type specimen book.",

    },
    {
        bgcolor: '#2CDCA7',
        title: 'Become and E-Sportsman that passes the qualifiers and is yours.',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },],
    [{
        bgcolor: '#DC6B2C',
        title: 'Be the world champion. Win the prize money.',
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        bgcolor: '#DC372C',
        title: 'Come on, choose one of the games and get started.',
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    }]
])
</script>
<style>








</style>