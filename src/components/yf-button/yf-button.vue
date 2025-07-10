<template>
  <button class="my-button" :class="type" @click="$emit('click')">
    <slot />
  </button>
</template>

<script lang="ts" setup>
// import { defineProps, defineEmits } from 'vue'

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
