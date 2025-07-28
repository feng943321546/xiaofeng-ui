# My UI - XiaoFeng

基于 Vue 3 + TypeScript 的组件库
![npm](https://img.shields.io/npm/v/xiaofeng-ui)
![license](https://img.shields.io/npm/l/xiaofeng-ui)

## 🔗 文档地址

👉 [在线文档](https://feng943321546.github.io/my-ui-library/)

## 📦 安装

```bash
npm install xiaofeng-ui


# 🚀 使用方式
## 全量引入
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import XiaoFeng from 'xiaofeng-ui'
import 'xiaofeng-ui/style'

const app = createApp(App)
app.use(XiaoFeng)
app.mount('#app')



## 按需引入
<script setup lang="ts">
import { YfButton,YfAlert} from 'xiaofeng-ui'
</script>

<template>
  <yf-button type="primary">主要按钮</yf-button>
</template>

