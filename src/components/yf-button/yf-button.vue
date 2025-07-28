<template>
    <button
        class="yf-button"
        :class="[
            `yf-button--${type}`,
            `yf-button--${size}`,
            {
                'is-plain': plain,
                'is-disabled': disabled,
                'is-round': round,
                'is-circle': circle,
            },
        ]"
        :disabled="disabled"
        @click="handleClick">
        <!-- 图标插槽 -->
        <span v-if="$slots.icon" class="yf-button__icon">
            <slot name="icon" />
        </span>
        <!-- 默认插槽（按钮文字） -->
        <span v-if="$slots.default">
            <slot />
        </span>
    </button>
</template>

<script lang="ts" setup>
    defineOptions({ name: "YfButton" });

    const emit = defineEmits(["click"]);

    const props = defineProps({
        // type: {
        //     type: String as () => "primary" | "success" | "warning" | "danger" | "info",
        //     default: "primary",
        // },
        // size: {
        //     type: String as () => "large" | "default" | "small",
        //     default: "default",
        // },
        type: { type: String, default: "default" },
        size: { type: String, default: "small" },
        plain: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        round: { type: Boolean, default: false },
        circle: { type: Boolean, default: false },
    });

    function handleClick(event: MouseEvent) {
        if (!props.disabled) emit("click", event);
    }
</script>

<style lang="scss" scoped>
    @use "./style.scss";
</style>
