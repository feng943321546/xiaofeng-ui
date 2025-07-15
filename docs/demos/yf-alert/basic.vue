<template>
    <yf-alert type="success">成功提示</yf-alert>
    <yf-alert type="info">信息提示</yf-alert>
    <yf-alert type="warning">警告提示</yf-alert>
    <yf-alert type="error">错误提示</yf-alert>
</template>

<script setup lang="ts">
    import { ref } from "vue";

    const handleClick = (nameType: string) => {
        console.log(`${nameType} 被点击了`);
    };
</script>
<style scoped></style>
