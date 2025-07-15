<template>
  <div class="my-alert" :class="type">
    <!-- {{ message }} -->
    <slot />
  </div>
</template>

<script lang="ts" setup>
// 定义组件名称
defineOptions({
  name: 'YfAlert'
})

const props = defineProps<{
  type?: 'success' | 'warning' | 'error' | 'info'
  message?: string
}>()
</script>

<style scoped src="./style.scss" />
