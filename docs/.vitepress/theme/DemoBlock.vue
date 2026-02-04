<template >
	<div class="demo-block" >
		<div class="demo-render" >
			<component v-if="DemoComponent" :is="DemoComponent" />
		</div >
		<div class="demo-divider" ></div >
		<div class="demo-meta" >
			<div class="demo-meta-header" >
				<button class="copy-btn" @click="copy" >复制代码</button >
				<button class="toggle-btn" @click="visible = !visible" >
					{{ visible ? "隐藏代码" : "显示代码" }}
				</button >
			</div >
			<!-- <div v-show="visible" class="demo-source">
					<div class="code-view">{{ sourceCode }}</div>
			</div> -->
			<div v-show="visible" class="demo-source" >
				<!-- <div class="contentClass" v-show="content">{{ content }}</div> -->
				<!--<pre><code>{{ sourceCode }}</code></pre>-->
				<pre ><code v-html="highlightedCode"></code ></pre >
			</div >
		</div >
	</div >
</template >

<script setup lang="ts" >
import {ref, computed, onMounted} from "vue";
import Prism from 'prismjs';
// import rawCode from '../../demos/yf-alert/basic.vue?raw'
// console.log('代码内容：', rawCode)

const props = defineProps<{
	src: string; // 例如：'yf-alert/basic'
	content?: string;
	language?: string; // 'vue', 'ts', 'html', 'css' 等
}>();

const demos = import.meta.glob("../../demos/**/*.vue", {eager: true, query: "?component"});
const sources = import.meta.glob("../../demos/**/*.vue", {eager: true, query: "?raw"});
const demoPath = computed(() => `../../demos/${props.src}.vue`); // 构造完整路径 当前正在使用的组件

// 显示使用的组件
const DemoComponent = computed(() => {
	return demos[demoPath.value]?.default || null;
});
// 显示的字符串源码
const sourceCode = computed(() => {
	return sources[demoPath.value].default || "⚠️ 未找到源码";
});

const highlightedCode = computed(() => {
	let tempLang = props.language || 'vue';
	const code = sources[demoPath.value].default || "";
	const lang = tempLang.toLowerCase();
	const grammar = Prism.languages[lang] || Prism.languages.markup; // fallback
	return Prism.highlight(code, grammar, lang);
});
// console.log('highlightedCode ==>', highlightedCode.value)

const visible = ref(false);
const copy = async () => {
	await navigator.clipboard.writeText(sourceCode.value);
	alert("已复制源码");
};
</script >

<style scoped >
/* .code-view {
		background-color: #f5f7fa;
		border-radius: 4px;
		padding: 12px;
		overflow-x: auto;
		font-family: monospace;
		font-size: 13px;
		white-space: pre;
} */

.demo-block {
	border: 1px solid #e4e7ed;
	border-radius: 6px;
	margin: 20px 0;
	overflow: hidden;
	box-shadow: 0 0 12px rgba(0, 0, 0, 0.04);
}

.demo-render {
	padding: 16px;
}

.demo-divider {
	border-top: 1px dashed #dcdfe6;
}

.demo-meta {
	/* background-color: #f9fafc; */
	padding: 12px 16px;
}

.demo-meta-header {
	display: flex;
	justify-content: flex-end;
	gap: 10px;
	font-size: 13px;
}

.contentClass {
	padding: 16px;
	background-color: #efefef;
	border-radius: 5px;
}

.copy-btn,
.toggle-btn {
	border: none;
	background: none;
	color: #409eff;
	cursor: pointer;
	font-size: 12px;
	padding: 0;
}

.copy-btn:hover,
.toggle-btn:hover {
	text-decoration: underline;
}

.demo-source {
	/* background-color: #f5f7fa; */
	border-radius: 4px;
	/* padding: 12px; */
	overflow-x: auto;
	font-family: monospace;
	font-size: 13px;
}
</style >
