<!-- src/components/yf-message/yf-message.vue -->
<template>
  <div
    class="yf-message"
    :class="[type, { plain }]"
    @mouseenter="clearTimer"
    @mouseleave="startTimer"
  >
    <span class="yf-message__content">{{ message }}</span>
    <span class="yf-message__close" @click="close">×</span>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from "vue";

defineOptions({ name: "YfMessage" });

const props = defineProps<{
  message: string;
  type?: "success" | "info" | "warning" | "error";
  plain?: boolean;
  duration?: number;
}>();

const emit = defineEmits(["destroy"]);
let timer: any = null;

const startTimer = () => {
  if (props.duration !== 0) {
    timer = setTimeout(() => {
      close();
    }, props.duration || 3000);
  }
};

const clearTimer = () => {
  if (timer) clearTimeout(timer);
};

const close = () => {
  emit("destroy");
};

onMounted(startTimer);
onBeforeUnmount(clearTimer);
</script>

<style lang="scss" scoped>
@use "./style.scss";
</style>
