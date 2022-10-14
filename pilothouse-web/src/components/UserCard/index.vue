
<template>
    <div bg-black w-1857px flex justify-center items-center>
        
            <div mr-10px flex justify-center items-center>
                <div opacity-90 hover:scale-110 hover:opacity-100 transition duration-150 mx-20px w-380px h-470px
                    text-center rounded-20px :class="props.bgcolor">
                    <div w-full h-40px flex justify-between items-center>
                        <slot name="icon"></slot>
                        <div h-20px w-130px mr-10px mt-20px >
                            <a opacity-30 hover:opacity-100 hover:scale-120 transition duration-150 mr-4 inline-block
                                w-25px h-25px opacity-50 bg-no-repeat bg-contain v-for="(item,j) in LogoSelected" :key="j"
                                 v-bind:class=item href="javascript:;"></a>
                        </div>
                    </div>
                    <div my-30px>
                        <el-avatar shape="square" :size="164" :src="props.avatar"></el-avatar>
                    </div>
                    <div>
                        <span block text-2xl>{{props.name}}</span>
                        <slot name="skills"></slot>
                    </div>
                    <div h-80px mt-30px mb-10px mx-10px flex justify-center items-center border-solid border black-200>
                        <slot name="intro"></slot>
                    </div>
                </div>
            </div>
    </div>
</template>
<script setup lang="ts">
import { Elogo } from '~/components/UserCard/type/enum' // vite
import {propsData} from '~/components/UserCard/props'
// 因为defineProps必须要在setup函数里才可以 直接export+import的方法获得的props对象为null 解决方法:先在props.js定义参数对象，再由UserCard组件进行defineProps
const props = defineProps(propsData)
const LogoSelected = computed(() => {
    return props.logoArr.map((item) => {
        if (item == "twitter" || item == "github")
        {
            return `i-carbon:logo-${Elogo[item]}`
        }
        else
        return `i-carbon:${Elogo[item]}`
    })
})
</script>