<template>
  <button class="my-button" :class="type" @click="$emit('click')">
    <slot />
  </button>
</template>

<script lang="ts" setup>
// 定义组件名称
defineOptions({
  name: 'YfButton'
})

// ✅ 使用类型声明 props
const props = defineProps<{
  type?: 'primary' | 'danger' | 'default'
}>()

// ✅ 使用类型声明 emits
const emit = defineEmits<{
  (e: 'click'): void
}>()
</script>

<style scoped src="./style.scss" />
