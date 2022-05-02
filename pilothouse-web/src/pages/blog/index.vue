<template>
    <editor v-model="text" theme="dark"></editor>
</template>

<script lang="ts" setup>
import Editor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

const text = ref('默认值')

</script>