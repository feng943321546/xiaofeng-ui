<template >
	<div style="display: flex; gap: 12px; flex-wrap: wrap;" >
		<yf-tag type="danger" closable @close="handleClose" >可关闭</yf-tag >
		<yf-tag type="primary" closable @close="handleClose" >可关闭</yf-tag >
		<yf-tag type="danger" closable plain @close="handleClose" >可关闭2</yf-tag >
		<yf-tag type="primary" closable plain @close="handleClose" >可关闭2</yf-tag >
		<yf-tag type="success" closable plain @close="handleClose" >可关闭2</yf-tag >
		<yf-tag type="warning" closable plain @close="handleClose" >可关闭2</yf-tag >
		<yf-tag type="info" closable plain @close="handleClose" >可关闭2</yf-tag >
	</div >
</template >

<script setup lang="ts" >
function handleClose() {
	// alert('关闭了标签')
	console.log('标签被关闭了')
}
</script >
