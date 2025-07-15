<template>
    <div>
        <a href="https://vite.dev" target="_blank">
            <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
            <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
    </div>
    <div>
        <!-- @click="handleClick('主要按钮')" -->
        <yf-button type="primary">主要按钮111111111</yf-button>
        <yf-button type="danger">危险按钮222222222</yf-button>
        <yf-button type="default">默认按钮333333333</yf-button>
    </div>
    <div style="margin-top: 20px">
        <yf-alert type="success">成功提示</yf-alert>
        <yf-alert type="info">信息提示</yf-alert>
        <yf-alert type="warning">警告提示</yf-alert>
        <yf-alert type="error">错误提示</yf-alert>
    </div>
</template>
<script setup lang="ts"></script>
<!-- <script lang="ts" setup> 
    // import { ref } from "vue";

    // const handleClick = (nameType: string) => {
    //     console.log(`${nameType} 被点击了`);
    // };
 </script> -->

<style scoped>
    .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
        transition: filter 300ms;
    }
    .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.vue:hover {
        filter: drop-shadow(0 0 2em #42b883aa);
    }
</style>
