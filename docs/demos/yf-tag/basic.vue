<template >
	<div style="display: flex; gap: 8px; flex-wrap: wrap" >
		<yf-tag >默认标签</yf-tag >
		<yf-tag type="primary" @click="handleClick('主要按钮')" >主要按钮</yf-tag >
		<yf-tag type="success" @click="handleClick('成功按钮')" >成功按钮</yf-tag >
		<yf-tag type="warning" @click="handleClick('警告按钮')" >警告按钮</yf-tag >
		<yf-tag type="danger" @click="handleClick('危险按钮')" >危险按钮</yf-tag >
		<yf-tag type="info" @click="handleClick('默认按钮')" >信息按钮</yf-tag >
		<yf-tag type="primary" plain >朴素标签</yf-tag >
		<yf-tag type="success" round >圆角</yf-tag >
		<yf-tag type="danger" closable @close="handleClose" >可关闭</yf-tag >
	</div >
</template >

<script setup lang="ts" >
const handleClick = (nameType: string) => {
	console.log(`${nameType} 被点击了`);
};

function handleClose() {
	// alert('关闭了标签')
	console.log('标签被关闭了');
}
</script >
