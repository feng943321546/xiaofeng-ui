<template >
	<yf-button type="primary" @click="open" >打开自定义插槽弹框</yf-button >
</template >

<script setup lang="ts" >
import {h, createVNode, render} from 'vue'
// import 'xiaofeng-ui/style' // 全局引入了，这行代码可以省略
import { YfMessageBox } from 'xiaofeng-ui'
// import YfMessageBox from '@components/yf-message-box' // 组件开发博主使用的
const open = () => {
	const container = document.createElement('div')

	const vnode = createVNode({
		render() {
			return h(YfMessageBox, {
				closeOnClickModal: true,
				onConfirm: () => {
					render(null, container)
					container.remove()
					console.log('你点击了确认')
				},
				onCancel: () => {
					render(null, container)
					container.remove()
					console.log('你点击了取消')
				}
			}, {
				header: ({ onClose}) => h('div', {class: 'custom-header'}, [
					h('i', {class: 'yf-icon icon-warning', style: 'margin-right: 6px;'}),
					h('span',{class:'yf-message-box__title'}, '警告提示'),
					h('span',{
						class:'yf-message-box__x',
						onClick: () => onClose?.()
					}, 'x'),
				]),
				default: () => h('div', {class: 'custom-content'}, '这是一段自定义内容。你可以写任何 HTML 内容。'),
				footer: ({onConfirm, onCancel}) => h('div', {class: 'custom-footer'}, [
					h('button', {
						class: 'btn cancel',
						style: 'font-size:14px;',
						onClick: () => onCancel?.()
					}, '关闭'),
					h('button', {
						class: 'btn confirm',
						style: 'font-size:14px;',
						onClick: () => onConfirm?.()
					}, '继续')
				])
			})
		}
	})

	render(vnode, container)
	document.body.appendChild(container)
}
</script >

<style scoped lang="scss">

</style >
