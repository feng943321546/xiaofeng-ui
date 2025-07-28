<template>
    <yf-input v-model="text" placeholder="请输入内容" />
</template>

<script setup lang="ts">
    import { ref } from "vue";
    const text = ref("");
</script>
