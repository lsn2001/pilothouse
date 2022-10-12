<script setup lang="ts">
const props: any = defineProps({
    avatar: {
        type: String,
        default: '',
        required: true
    },
    name: {
        type: String,
        default: '',
        required: true
    },
    bgcolor: {
        type: String,
        default: 'white',
        required: true
    },
    logoNum: {
        type: String,
        default: 'all',
    }
})

const logoType: Array<string> = ['i-carbon:share', 'i-carbon:logo-twitter', 'i-carbon:logo-github']
const Logo = computed(() => {
    let arr1: Array<number> = [...props.logoNum]
    let arr2: Array<string> = []
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] == 1) {
            arr2.push(logoType[0])
        }
        if (arr1[i] == 2) {
            arr2.push(logoType[1])
        }
        if (arr1[i] == 3) {
            arr2.push(logoType[2])
        }

    }
    return arr2
})



</script>
<template>
    <div bg-black w-1857px flex justify-center items-center>
        <div mx-20px flex justify-center items-center>
            <div mr-10px flex justify-center items-center>
                <div opacity-90 hover:scale-110 hover:opacity-100 transition duration-150 mx-20px w-380px h-470px
                    text-center rounded-20px :class="bgcolor">
                    <div w-full h-40px flex justify-between items-center>
                        <slot name="icon"></slot>
                        <div h-20px w-130px mr-10px mt-20px>
                            <a opacity-30 hover:opacity-100 hover:scale-120 transition duration-150 mr-4 inline-block
                                w-25px h-25px opacity-50 bg-no-repeat bg-contain v-for="(item,j) in Logo" :key="j"
                                :class=item href="javascript:;"></a>
                        </div>
                    </div>
                    <div my-30px>
                        <el-avatar shape="square" :size="164" :src="avatar"></el-avatar>
                    </div>
                    <div>
                        <span block text-2xl>{{name}}</span>
                        <slot name="skills"></slot>
                    </div>
                    <div h-80px mt-30px mb-10px mx-10px flex justify-center items-center border-solid border black-200>
                        <slot name="intro"></slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>