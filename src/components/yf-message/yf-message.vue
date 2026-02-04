<template >
	<transition name="fade" >
		<div
				class="yf-message"
				:class="[type, { plain }]"
				:style="{ top: `${top}px` }"
				@mouseenter="clearTimer"
				@mouseleave="startTimer"
		>
			<!--<yf-icon size="24" color="#07bdb9" class="mr-10">
				<svg viewBox="0 0 1024 1024">
					<path d="M512 64a448 448 0 1 0 448 448A448 448 0 0 0 512 64Zm0 832A384 384 0 1 1 896 512 384.43 384.43 0 0 1 512 896Zm-64-544a64 64 0 1 1 64 64 64 64 0 0 1-64-64Zm128 352h-128a32 32 0 0 1 0-64h32v-128h-32a32 32 0 0 1 0-64h96a32 32 0 0 1 32 32v160h32a32 32 0 0 1 0 64Z" />
				</svg>
			</yf-icon>-->
			<span class="yf-message__content" >{{ message }}</span >
			<span class="yf-message__close" @click="close" >×</span >
		</div >
	</transition >
</template >

<script setup lang="ts" >
import {onMounted, onBeforeUnmount} from "vue";
// import YfIcon from "@components/yf-icon";

defineOptions({name: "YfMessage"});

const props = defineProps<{
	id: string;
	message: string;
	type?: "success" | "info" | "warning" | "danger";
	plain?: boolean;
	duration?: number;
	top?: number;
}>();

const emit = defineEmits(["destroy"]);
let timer: any = null;

const startTimer = () => {
	if (props.duration !== 0) {
		timer = setTimeout(() => {
			close();
		}, props.duration || 3000);
	}
};

const clearTimer = () => {
	if (timer) clearTimeout(timer);
};

const close = () => {
	emit("destroy");
};

onMounted(startTimer);
onBeforeUnmount(clearTimer);
</script >

<style lang="scss" scoped >
@use "./style.scss";
</style >
