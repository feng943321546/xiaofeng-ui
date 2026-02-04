<template >
	<yf-button type="primary" @click="open" >打开弹框</yf-button >
</template >

<script setup lang="ts" >
import {showMessageBox} from 'xiaofeng-ui'
// import { showMessageBox } from "@components/yf-message-box"; // 组件开发博主使用的
const open = () => {
	showMessageBox({
		title: '提示',
		message: '确定要删除这条记录吗？',
		type: 'warning',
		confirmButtonText: '确认',
		cancelButtonText: '取消',
		closeOnClickModal: true
	})
			.then(() => {
				console.log('已确认')
			})
			.catch(() => {
				console.log('取消操作')
			})
}
</script >
