<template>
  <div class="yf-input" :class="{ 'is-disabled': disabled }">
    <input
      class="yf-input__inner"
      :placeholder="placeholder"
      :disabled="disabled"
      :type="type"
      v-model="inputValue"
      @input="onInput"
    />
  </div>
</template>

<script lang="ts" setup>
defineOptions({ name: 'YfInput' })
import { computed } from 'vue'
const props = defineProps<{
  modelValue?: string
  placeholder?: string
  disabled?: boolean
  type?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', val: string): void
}>()

const inputValue = computed({
  get: () => props.modelValue ?? '',
  set: (val) => emit('update:modelValue', val)
})

function onInput(event: Event) {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<style scoped lang="scss">
// @use "../../style/variables.scss" as *;
@use "./style.scss";
</style>
