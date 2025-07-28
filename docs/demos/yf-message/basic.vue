<template>
  <div class="demo-message">
    <yf-button type="primary" @click="show('primary')">Primary</yf-button>
    <yf-button type="success" @click="show('success')">Success</yf-button>
    <yf-button type="warning" @click="show('warning')">Warning</yf-button>
    <yf-button type="danger" @click="show('danger')">Danger</yf-button>
    <yf-button type="info" @click="show('info')">Info</yf-button>
  </div>
</template>

<script setup lang="ts">
// import { showMessage } from 'xiaofeng-ui'
import { showMessage } from '@/components/yf-message';


function show(type: 'primary' | 'success' | 'warning' | 'danger' | 'info') {
  showMessage({
    message: `这是一条 ${type} 消息`,
    type,
    duration: 2000
  });
}
</script>

<style scoped>
.demo-message {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 12px;
}
</style>
