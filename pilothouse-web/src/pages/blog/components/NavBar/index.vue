<template>
    <div class="nav-bar bg-blue-400 w-full flex justify-between items-center">
        <NavIcon></NavIcon>
        <NavSearch></NavSearch>
        <UserInfo></UserInfo>
    </div>
</template>
<script lang="ts" setup>

import NavIcon from '~/pages/blog/components/NavBar/NavIcon.vue'
// import NavSearch from '~/pages/blog/components/NavBar/NavSearch.vue'

import 'md-editor-v3/lib/style.css';
import NavSearch from './NavSearch.vue'

import UserInfo from './UserInfo.vue'



</script>
<style>


.el-input__wrapper {
    background-color: #29043D;
    border-radius: 50px;
}

.el-input__prefix-inner {
    width: 30px;
}

.el-input__inner::placeholder {
    text-align: center;
}

.el-input__inner {
    color: #fff;
}




</style>