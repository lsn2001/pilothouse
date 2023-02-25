<template>
    <div class="Search w-3/10">
            <el-input v-model="input" placeholder="Search Game and E-Sports Team" class="input-with-select "
                :prefix-icon="Search">
            </el-input>
    </div>
</template>
<script setup lang="ts">
    import { Search } from '@element-plus/icons-vue'
    const input = ref('')
</script>