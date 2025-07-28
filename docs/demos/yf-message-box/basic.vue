<template>
  <yf-button @click="show = true">打开确认框</yf-button>
  <yf-message-box
    :visible="show"
    title="提示"
    message="是否确认操作？"
    type="confirm"
    @confirm="onConfirm"
    @cancel="onCancel"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const show = ref(false);
const onConfirm = () => {
  show.value = false;
  console.log("确认操作");
};
const onCancel = () => {
  show.value = false;
  console.log("取消操作");
};
</script>
