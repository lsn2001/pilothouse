<template>
    <div class="right-header">
        <p class="data">Live Statistics</p>
        <div class="score">
            <div class="img1"></div>
            <div class="team">
                <p>KT 0 - 1 MP</p>
                <p>ALE 3 - 0 KOM</p>
                <p>OME 0 - 5 POL</p>
                <p>PLE 2 - 1 VFB</p>
            </div>
        </div>
        <div class="score">
            <div class="img2"></div>
            <div class="team">
                <p>KT 0 - 1 MP</p>
                <p>ALE 3 - 0 KOM</p>
                <p>OME 0 - 5 POL</p>
                <p>PLE 2 - 1 VFB</p>
            </div>
        </div>
    </div>
</template>
<style>
    .right-header{
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #29043D;
        color: #FFFFFF;
    }
    .data{
        width: 80%;
        margin: 20px 100px;
    font-style: normal;
font-weight: 700;
font-size: 25px;
    } 
    .score{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .score .img1{
        width: 100px;
    height: 100px;
    margin: 0 20px;
    background: url("~/../public/right-header.png") no-repeat center;
    background-size: contain;
    }
    .score .img2{
        width: 150px;
    height: 100px;
    margin: 0 20px;
    background: url("~/../public/csgo.png") no-repeat center;
    background-size: contain;
    }
    .team{
        font-style: normal;
font-weight: 700;
font-size: 30px;
        margin: 20px 0;
    }
    .team p{
        padding: 10px 0;
    }

</style>