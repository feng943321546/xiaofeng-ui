<template>
    <div class="demo-block">
        <!-- 渲染示例 -->
        <div class="demo-render">
            <component v-if="demoComponent" :is="demoComponent" />
        </div>

        <!-- 分割线 -->
        <div class="demo-divider"></div>

        <!-- 源码区 -->
        <div class="demo-meta">
            <div class="demo-meta-header">
                <button class="copy-btn" @click="copyCode">复制代码</button>
                <button class="toggle-btn" @click="visible = !visible">
                    {{ visible ? "隐藏代码" : "显示代码" }}
                </button>
            </div>
            <div v-show="visible" class="demo-source">
                <pre><code>{{ source }}</code></pre>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, shallowRef, onMounted } from "vue";

    const props = defineProps<{
        demoPath: string;
    }>();

    const visible = ref(false);
    const source = ref("");
    const demoComponent = shallowRef(null);
    let t = "yf-";
    // const demoMap = {
    //   [t+'button/basic']: () => import('../demos/yf-button/basic.vue'),
    //   // 可以继续加：'button/xxx': () => import(...)
    // }
    // 1. 显式列出可用 demo
    const demoMap: Record<string, () => Promise<any>> = {
        "yf-button/basic": () => import("@demos/yf-button/basic.vue"),
        "yf-alert/basic": () => import("@demos/yf-alert/basic.vue"),
        // 更多 demo 可以继续扩展
    };

    onMounted(async () => {
        try {
            console.log("props.demoPath ==>", props.demoPath);

            // 动态导入组件
            // demoComponent.value = (await import(`../demos/${props.demoPath}.vue`)).default
            // console.log('demoComponent ==>', demoComponent);

            const loader = demoMap[props.demoPath];
            console.log("loader ==>", loader);
            if (!loader) {
                source.value = `未找到 demo: ${props.demoPath}`;
                return;
            }
            demoComponent.value = (await loader()).default;

            // 获取源码
            const res = await fetch(`/docs/demos/${props.demoPath}.vue`);
            console.log("获取源码 res ==>", res);
            source.value = await res.text();
        } catch (error) {
            source.value = `加载源码失败：${error}`;
        }
    });

    const copyCode = async () => {
        await navigator.clipboard.writeText(source.value);
        alert("复制成功！");
    };
</script>
<style scoped>
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
        background-color: #f9fafc;
        padding: 12px 16px;
    }
    .demo-meta-header {
        display: flex;
        justify-content: flex-end;
        gap: 10px;
        font-size: 13px;
    }
    .copy-btn,
    .toggle-btn {
        border: none;
        background: none;
        color: #409eff;
        cursor: pointer;
        padding: 0;
    }
    .copy-btn:hover,
    .toggle-btn:hover {
        text-decoration: underline;
    }
    .demo-source {
        background-color: #f5f7fa;
        border-radius: 4px;
        padding: 12px;
        overflow-x: auto;
        font-family: monospace;
        font-size: 13px;
    }
</style>
