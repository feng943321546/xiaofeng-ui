<template >
	<span
			class="yf-tag"
			:class="[type, { plain, round, hit }]"
			:style="tagStyle"
	>
    <slot />
    <span
				v-if="closable"
				class="yf-tag__close"
				@click.stop="handleClose"
		>
      <slot name="close-icon">×</slot>
    </span>
  </span>
</template >

<script lang="ts" setup >
import { computed } from 'vue'

defineOptions({name: 'YfTag'})
const props = defineProps<{
	type?: 'primary' | 'success' | 'warning' | 'danger' | 'info'
	closable?: boolean
	plain?: boolean
	round?: boolean
	hit?: boolean
	disableTransitions?: boolean
	color?: string
}>()

const emit = defineEmits(['close'])

function handleClose() {
	emit('close')
}

const tagStyle = computed(() => {
	if (!props.color) return {}
	return {
		backgroundColor: props.plain ? 'transparent' : props.color,
		borderColor: props.color,
		color: props.plain ? props.color : '#fff'
	}
})
</script >

<style scoped lang="scss" >
// @use "../../style/variables.scss" as *;
@use "./style.scss";
</style >
