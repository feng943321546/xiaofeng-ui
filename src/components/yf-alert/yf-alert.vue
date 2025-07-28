<template>
    <div v-if="visible" class="yf-alert" :class="[typeClass, { 'is-plain': plain }]" role="alert">
        <i v-if="$slots.icon" class="yf-alert__icon"><slot name="icon" /></i>
        <div class="yf-alert__content">
            <span v-if="$slots.title || title" class="yf-alert__title">
                <slot name="title">{{ title }}</slot>
            </span>
            <p v-if="message" class="yf-alert__message">{{ message }}</p>
            <slot />
        </div>
        <button v-if="close" class="yf-alert__close" @click="handleClose" aria-label="close">
            <slot name="close">×</slot>
        </button>
    </div>
</template>

<script lang="ts" setup>
    defineOptions({ name: "YfAlert" });

    import { computed, onMounted, ref } from "vue";

    const emit = defineEmits(["open", "close"]);

    const props = defineProps<{
        type?: "success" | "warning" | "error" | "info";
        plain?: boolean;
        title?: string;
        message?: string;
        close?: boolean;
    }>();

    const typeClass = computed(() => `yf-alert--${props.type || "info"}`);

    onMounted(() => {
        emit("open");
    });
    const visible = ref(true);
    const handleClose = () => {
        visible.value = false;
        emit("close");
    };
</script>

<style scoped lang="scss">
    @use "./style.scss";
</style>
