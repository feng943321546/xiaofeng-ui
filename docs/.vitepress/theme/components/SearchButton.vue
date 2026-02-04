<template>
	<div class="search-button-container">
		<button class="search-btn" @click="show = true">🔍 搜索</button>

		<div v-if="show" class="search-modal" @click.self="show = false">
			<div class="search-box">
				<input v-model="query" placeholder="输入关键词..." />
				<button @click="show = false">关闭</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const show = ref(false)
const query = ref('')

function open() {
	show.value = true
}
function close() {
	show.value = false
}

// onMounted(() => {
// 	// 给导航按钮绑定事件
// 	const trigger = document.querySelector('.search-trigger')
// 	trigger?.addEventListener('click', (e) => {
// 		e.preventDefault()
// 		open()
// 	})
// })
</script>

<style scoped>
.search-button-container {
	margin-left: 12px;
}

.search-btn {
	background: none;
	border: none;
	font-size: 16px;
	cursor: pointer;
}

.search-modal {
	position: fixed;
	inset: 0;
	background: rgba(0, 0, 0, 0.4);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 9999;
}
.search-box {
	background: #fff;
	padding: 20px;
	border-radius: 6px;
	min-width: 300px;
}
</style>
