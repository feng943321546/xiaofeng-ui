<template>
	<Layout>
		<!-- 原始默认内容 -->
		<template #navbar>
			<!-- 添加一个自定义按钮到导航栏右侧 -->
			<div class="custom-navbar">
				<a href="/" class="logo">MyUI</a>
				<SearchButton />
			</div>
		</template>
	</Layout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
import SearchButton from './components/SearchButton.vue'
</script>

<style scoped>
.custom-navbar {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 24px;
	height: 56px;
	background: #fff;
	border-bottom: 1px solid #eee;
}
.logo {
	font-weight: bold;
	font-size: 18px;
	color: #333;
	text-decoration: none;
}
</style>
