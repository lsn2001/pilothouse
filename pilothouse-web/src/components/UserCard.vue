<script setup lang="ts">


const cardList: any = [
    {
        itemImage: './../imgs/1.png',
        name: 'Guillaume Chau',
        info: 'Vue / Histoire',
        intro: 'Histoire Deep Dive',
        icon: './../imgs/icon1.svg',
        bgcolor: 'bg-gradient-to-b from-green-300 via-green-400 to-green-500'
    },
    {
        itemImage: './../imgs/2.png',
        name: 'Vojtech Miksu',
        info: 'Uber / Ladle',
        intro: 'introducing Ladle:Develop and test your React stories faster',
        icon: './../imgs/icon2.svg',
        bgcolor: 'bg-gradient-to-b from-blue-300 via-blue-400 to-blue-500'
    },
    {
        itemImage: './../imgs/3.png',
        name: 'lan VanSchooten',
        info: 'Defined Networking / Storybook',
        intro: 'Developing,Documenting,and Testing your Vite app with Stroybook',
        icon: './../imgs/icon3.svg',
        bgcolor: 'bg-gradient-to-b from-red-300 via-red-400 to-red-500'
    }
]

</script>
<template>
    <div class="UserCard">
        <div class='container'>
            <div class='card-list'>
                <div class="list">
                    <div class="item opacity-90 hover:scale-110 hover:opacity-100 transition duration-150 " :class="item.bgcolor" v-for="(item,j) in cardList" :key="j">
                        <div class="item-logo">
                            <div class="icon">
                                <img class='info-icon' :src="item.icon" alt="">
                            </div>
                            <div class="share-icon">
                                <a class="share opacity-30 hover:opacity-100 hover:scale-120 transition duration-150" href="javascript:;"></a>
                                <a class="bluebird opacity-30 hover:opacity-100 hover:scale-120 transition duration-150" href="javascript:;"></a>
                                <a class="github opacity-30 hover:opacity-100 hover:scale-120 transition duration-150" href="javascript:;"></a>
                            </div>
                        </div>
                        <div class="item-img">
                            <el-avatar shape="square" :size="164" :src="item.itemImage"></el-avatar>
                        </div>
                        <div class="item-info">
                            <span block text-2xl>{{item.name}}</span>
                            <span block>{{item.info}}</span>
                        </div>
                        <div class="item-intro ">
                            <span class="intro">{{item.intro}}</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

</template>


<style>
.UserCard {
    width: 1668px;
    background: #000;
}

.card-list {
    width: 1650px;
    margin: 0px 14px 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.list {
    margin: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.item {
    margin: 0 20px;
    width: 380px;
    height: 470px;
    text-align: center;
    border-radius: 20px;
    background-color: grey;

}

.info-icon {
    height: 30px;
    width: 30px;
    margin-left: 20px;
    margin-top: 20px;
}

.share-icon {
    height: 20px;
    width: 130px;
    margin-right: 10px;
    margin-top: 20px;
}

.item-logo {
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
a{
    margin-right: 15px;
}
.share {
    display: inline-block;
    width: 25px;
    height: 25px;
    background: url('https://api.iconify.design/carbon:share.svg') no-repeat center;
    background-size: contain;
    opacity: 0.5;
}
.bluebird{
    display: inline-block;
    width: 25px;
    height: 25px;
    background: url('./../imgs/bluebird.svg') no-repeat center;
    background-size: contain;
    opacity: 0.5;
}
.github{
    display: inline-block;
    width: 25px;
    height: 25px;
    background: url('./../imgs/github.svg') no-repeat center;
    background-size: contain;
    opacity: 0.5;
}

.item-img {
    margin: 30px 0;
}

.intro {
    display: inline-block;
    margin: 0 10px;

}

.item-intro {
    height: 80px;
    margin: 30px 10px 10px;
    border: solid 1px #333333;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>