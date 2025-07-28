<template>
  <div class="yf-card" :class="[shadowClass]">
    <div v-if="hasHeader" class="yf-card__header">
      <slot name="header">
        {{ header }}
      </slot>
    </div>
    <div class="yf-card__body">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'YfCard' })
import { computed, useSlots } from 'vue'
const props = defineProps<{
  header?: string
  shadow?: 'always' | 'hover' | 'never'
}>()

const shadowClass = computed(() => {
  return {
    'is-always-shadow': props.shadow === 'always',
    'is-hover-shadow': props.shadow === 'hover',
    'is-never-shadow': props.shadow === 'never',
  }
})

const hasHeader = computed(() => {
  return !!props.header || !!useSlots().header
})
</script>

<style scoped lang="scss">
@use "./style.scss";
</style>
