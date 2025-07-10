<template>
  <div class="my-alert" :class="type">
    <!-- {{ message }} -->
    <slot />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  type?: 'success' | 'warning' | 'error' | 'info'
  message?: string
}>()
</script>

<style scoped src="./style.scss" />
