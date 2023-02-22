<template>
    <div class="middle">
        <div class="tournaments">
            <svg width="1216" height="262" viewBox="0 0 1216 262" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="1216" height="262" rx="35" fill="#892CDC" />
            </svg>

            <p class="title">The only address for tournaments.</p>
        </div>

        <div class="channel">
            <p class="title">Live Channel</p>
            <div class="channel-lists">
                <img class="arrow" src="https://api.iconify.design/carbon:arrow-left.svg" alt="" srcset="">
                <ul v-for="(item, index) in props.channelList" :key="index">
                    <li><el-avatar :src="item.img" />
                        <p>{{ item.number }}</p>
                    </li>
                </ul>
                <img class="arrow" src="https://api.iconify.design/carbon:arrow-right.svg" alt="" srcset="">
            </div>
        </div>
        <div class="recommend" v-for="(item, i) in cardList" :key="i" >
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
import Card from '~/pages/blog/Card.vue';
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
.middle {
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #E6E6E6;
    position: relative;
}

.title {
    font-size: 28px;
    font-weight: bold;
}

.middle .tournaments {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.middle svg {
    width: 80%;
}

.middle .tournaments .title {
    width: 40%;
    text-align: start;
    position: absolute;
    left: 120px;
    top: 90px;
}

.middle .channel {
    width: 90%;
}

.middle .channel .title {
    text-align: left;
    margin: 20px 0;
}

.channel-lists {
    background-color: #29043D;
    width: 100%;
    height: 100px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #E6E6E6;
}

.channel-lists ul {
    width: 17%;

}

.channel-lists .arrow {
    width: 30px;
    background-color: #E6E6E6;
    border-radius: 30px;
}

.recommend {
    width: 95%;
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
}
</style>