<template>
    <div flex flex-col h-full w-full justify-end>
        <div w-full>{{todoList}}</div>
        <div flex items-center justify-center w-full h-100px>
            <div class="flex w-4/5">
                {{inputValue}}
                <el-input v-model="inputValue" h-80px size="large" round placeholder="请输入你的TODO" />
                <div @click="addTodo" text-4xl h-80px ml-10px inline-block i-carbon-add-alt></div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const inputValue = ref('')
const todoList = reactive<string[]>([])
const addTodo = () => {
    todoList.push(inputValue.value)
}
</script>
