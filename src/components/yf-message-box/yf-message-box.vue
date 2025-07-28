<template>
  <div class="yf-message-box-mask" v-if="visible">
    <div class="yf-message-box">
      <div class="header">
        <span class="title">{{ title }}</span>
      </div>
      <div class="content">
        <p>{{ message }}</p>
        <input v-if="type === 'prompt'" v-model="inputValue" />
      </div>
      <div class="footer">
        <button @click="handleCancel">取消</button>
        <button @click="handleConfirm">确定</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

defineOptions({ name: "YfMessageBox" });

const props = defineProps<{
  visible: boolean;
  title?: string;
  message?: string;
  type?: 'alert' | 'confirm' | 'prompt';
}>();

const emit = defineEmits<{
  (e: 'confirm', val?: string): void;
  (e: 'cancel'): void;
}>();

const inputValue = ref('');

const handleConfirm = () => {
  emit('confirm', props.type === 'prompt' ? inputValue.value : undefined);
};
const handleCancel = () => {
  emit('cancel');
};
</script>

<style scoped lang="scss">
@use "./style.scss";

</style>
