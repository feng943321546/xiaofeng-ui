<template>
  <div class="demo-message-plain">
    <yf-button type="primary" plain @click="show('primary')">Plain Primary</yf-button>
    <yf-button type="success" plain @click="show('success')">Plain Success</yf-button>
    <yf-button type="warning" plain @click="show('warning')">Plain Warning</yf-button>
    <yf-button type="danger" plain @click="show('danger')">Plain Danger</yf-button>
    <yf-button type="info" plain @click="show('info')">Plain Info</yf-button>
  </div>
</template>

<script setup lang="ts">
// import { showMessage } from 'xiaofeng-ui'
import { showMessage } from '@/components/yf-message';

function show(type: 'primary' | 'success' | 'warning' | 'danger' | 'info') {
  showMessage({
    message: `这是一条 ${type} 类型的 plain 消息`,
    type,
    plain: true,
    duration: 2500
  });
}
</script>

<style scoped>
.demo-message-plain {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 12px;
}
</style>
