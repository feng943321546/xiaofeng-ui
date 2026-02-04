<template >
	<div class="yf-loading" :class="{ fullscreen }">
		<span class="spinner"></span>
	</div>
</template >

<script lang="ts" setup >
defineOptions({name: 'YfLoading'})
defineProps<{
	fullscreen?: boolean
}>()
</script >

<style scoped lang="scss" >
// @use "../../style/variables.scss" as *;
@use "./style.scss";
</style >
