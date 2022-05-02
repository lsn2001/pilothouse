<template>
    {{ userInfo }}
</template>
<script setup lang="ts">
import request from "~/service";
import type { UserInfoReq, UserInfoRes } from "common/index";
const userInfo = reactive({
    name: "zhangsan",
    age: 18
})
const getUserInfo = (data: UserInfoReq) => {
    // 请求返回类型传入泛型
    return request<UserInfoReq, UserInfoRes>({
        url: "/user_manage/postUserInfo",
        method: "post",
        data,
    });
};

onMounted(async () => {
    const res = await getUserInfo({ userId: 1 })
    userInfo.name = res.result.name
})
</script>