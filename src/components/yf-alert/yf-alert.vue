<template>
  <div class="my-alert" :class="type">
    <!-- {{ message }} -->
    <slot />
  </div>
</template>

<script lang="ts" setup>
<<<<<<< HEAD
// 定义组件名称
defineOptions({
  name: 'YfAlert'
})

=======
>>>>>>> b7363b15676ea77df50656774281813ac2cad632
const props = defineProps<{
  type?: 'success' | 'warning' | 'error' | 'info'
  message?: string
}>()
</script>

<style scoped src="./style.scss" />
