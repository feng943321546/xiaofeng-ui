<template>
	<Teleport to="body">
		<div v-if="visible" class="yf-message-box__wrapper" @click.self="handleMaskClick">
			<div class="yf-message-box" :class="`is-${type}`">
				<!-- Header -->
				<div class="yf-message-box__header">
					<slot name="header" :onClose="handleIconClick">
						<!--<i v-if="iconClass" class="yf-icon" :class="iconClass"></i>-->
						<span class="yf-message-box__title">{{ title }}</span>
						<span class="yf-message-box__x" @click.self="handleIconClick">x</span>
					</slot>
				</div>

				<!-- Content -->
				<div class="yf-message-box__content">
					<slot>{{ message }}</slot>
				</div>

				<!-- Footer -->
				<div class="yf-message-box__footer">
					<slot name="footer" :onConfirm="handleConfirm" :onCancel="handleCancel">
						<yf-button class="btn cancel" @click="handleCancel">{{ cancelButtonText }}</yf-button>
						<yf-button class="btn confirm" @click="handleConfirm">{{ confirmButtonText }}</yf-button>
					</slot>
				</div>
			</div>
		</div>
	</Teleport>
</template>

<script lang="ts" setup>
import { ref ,onMounted, onUnmounted} from 'vue'
import type { MessageBoxOptions } from './types'
import YfButton from '../yf-button/yf-button.vue'

// const props = defineProps<MessageBoxOptions>()
const props = withDefaults(defineProps<MessageBoxOptions>(), {
	title: '提示',
	message: '这是一条消息',
	closeOnClickModal: true,
	showCancelIcon: true,
	confirmButtonText: '确认',
	cancelButtonText: '取消',
	type: 'info'
})
const emit = defineEmits(['confirm', 'cancel'])

const visible = ref(true)
const boxRef = ref<HTMLElement | null>(null)
const handleConfirm = () => {
	visible.value = false
	emit('confirm')
}
const handleCancel = () => {
	visible.value = false
	emit('cancel')
}
const handleMaskClick = () => {
	if (props.closeOnClickModal) handleCancel()
}
const handleIconClick = () => {
	console.log('11111111111', props)
	if (props.showCancelIcon) handleCancel()
}
// 支持 Esc 关闭
const handleKeydown = (e: KeyboardEvent) => {
	if (e.key === 'Escape') {
		handleCancel()
	}
}
onMounted(() => {
	window.addEventListener('keydown', handleKeydown)
})
onUnmounted(() => {
	window.removeEventListener('keydown', handleKeydown)
})
// 图标类型
const iconMap = {
	success: 'icon-success',
	warning: 'icon-warning',
	danger: 'icon-danger',
	info: 'icon-info',
	primary: 'icon-info'
}
const iconClass = iconMap[props.type || 'info']
</script>

<style scoped lang="scss">
@use './style.scss';
</style>
