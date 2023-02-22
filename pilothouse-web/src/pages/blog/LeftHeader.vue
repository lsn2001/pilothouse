<template>
    <div class="left-header">
        <p class="winner">This Month Winner</p>
        <div class="people">
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
            <p class="name">{{ name }}</p>
        </div>
        <div class="list">
            <div class="Home" ref="home"  >
                <span>Home</span>
            </div>
            <div class="Live">
                <span>Live</span>
            </div>
            <div class="Games">
                <span>Games</span>
                <svg width="20" height="22" viewBox="0 0 36 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.3875 0.0541687L18 13.4125L4.6125 0.0541687L0.5 4.16667L18 21.6667L35.5 4.16667L31.3875 0.0541687Z" fill="white"/>
</svg>
            </div>
            

        </div>
        <div class="list-game">
            <div class="Home" ref="home"  >
                <div class="img1"></div>
                <span>Valorant</span>
            </div>
            <div class="Live">
                <div class="img2"></div>
                <span>CS&GO</span>
            </div>
            <div class="Games">
                <span>BrawlHalla</span>
                
            </div>
            
            <div class="More">
                <img src="" alt="" srcset="">
                More Game</div>
        </div>
    </div>
</template>
<script setup lang="ts">

const name = ref('KeazoN Team');
const home = ref('')


</script>
<style>
.left-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #29043D;
    color: #E6E6E6;
    position: relative;
}

.winner {
    width: 100%;
    margin: 20px 100px;
    font-style: normal;
font-weight: 700;
font-size: 25px;

}

.name {
    margin: 20px 0;
    color: #2CD1DC;
    font-style: normal;
font-weight: 700;
font-size: 25px;
}

.list {
    margin: 30px 0;
    font-style: normal;
font-weight: 700;
font-size: 30px;
    width: 80%;
    /* display: flex;
    flex-direction: column;
    align-items: center; */
}
.list div{
    padding: 10px 0;
}
.list-game div{
    display: flex;
    align-items: center;
    padding: 20px 0;
}
.list-game .img1{
    width: 50px;
    height: 50px;
    margin: 0 20px;
    background: url("./../../../public/right-header.png") no-repeat center;
    background-size: contain;
}
.list-game .img2{
    width: 80px;
    height: 50px;
    margin: 0 10px;
    background: url("./../../../public/csgo.png") no-repeat center;
    background-size: contain;
}
.list-game{
    margin: 30px 0;
    font-style: normal;
font-weight: 700;
font-size: 30px;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.Home{
    display: flex;
    justify-content: center;
    
}
.Live{
    display: flex;
    justify-content: center;
}
.Games{
    display: flex;
    justify-content: center;   
    position: relative;
}
.list svg{
    position: absolute;
    right: 0px;
    bottom: 0px;
}   
.More{
    color: #fff;
    margin: 40px 0;
}
    </style>