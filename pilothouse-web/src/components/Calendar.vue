<template>
    <n-calendar v-model:value="value" #="{ year, month, date }" :is-date-disabled="isDateDisabled">
        {{ year }}-{{ month }}-{{ date }}
    </n-calendar>
</template>

<script setup lang="ts">
import { isYesterday, addDays } from 'date-fns'


const value = ref(addDays(Date.now(), 1).valueOf())

const isDateDisabled = (timestamp: number) => {
    if (isYesterday(timestamp)) {
        return true
    }
    return false
}

</script>