<template>
  <i
    class="yf-icon"
    :class="[name]"
    :style="iconStyle"
    @click="onClick"
  >
    <slot />
  </i>
</template>

<script setup lang="ts">
defineOptions({ name: 'YfIcon' })
import { computed } from 'vue'
const props = defineProps<{
  name?: string     // 图标 class 名
  size?: string | number
  color?: string
}>()

const emit = defineEmits<{
  (e: 'click', ev: MouseEvent): void
}>()
// console.log('YfIcon component loaded',props.name, props.size, props.color);

const iconStyle = computed(() => {
  return {
    fontSize: typeof props.size === 'number' ? `${props.size}px` : props.size,
    color: props.color
  }
})

function onClick(e: MouseEvent) {
  emit('click', e)
}
</script>

<style scoped lang="scss">
@use "./style.scss";
</style>
