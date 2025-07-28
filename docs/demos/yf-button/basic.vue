<template>
    <yf-button>默认按钮</yf-button>
    <yf-button type="primary" @click="handleClick('主要按钮')">主要按钮</yf-button>
    <yf-button type="success" @click="handleClick('成功按钮')">成功按钮</yf-button>
    <yf-button type="warning" @click="handleClick('警告按钮')">警告按钮</yf-button>
    <yf-button type="danger" @click="handleClick('危险按钮')">危险按钮</yf-button>
    <yf-button type="info" @click="handleClick('默认按钮')">信息按钮</yf-button>
</template>

<script setup lang="ts">
    const handleClick = (nameType: string) => {
        console.log(`${nameType} 被点击了`);
    };
</script>
<style scoped></style>
