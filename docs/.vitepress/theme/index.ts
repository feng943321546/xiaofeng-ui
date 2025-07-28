import type { App } from "vue";
import DefaultTheme from "vitepress/theme";
// ✅ 使用 Prism 默认主题（你也可以改成 tomorrow.css 或其它）
// import "prismjs/themes/prism.css";
// ✅ DemoBlock 是我们用来展示组件和代码的容器（路径根据你说的，正确）
// import DemoBlock from '../../components/DemoBlock.vue'
import DemoBlock from "./DemoBlock.vue";
// ✅ 直接从 src 注册你的组件库的组件（路径没问题）
// import YfButton from '@/components/yf-button/index';
// import YfAlert from '@/components/yf-alert/index';
// import YfButton from "../../../src/components/yf-button/index";
// import YfAlert from "../../../src/components/yf-alert/index";

import "./style.css";
// ✅ 自动注册所有 src/components/yf-xxx/index.ts 中的组件
const modules = import.meta.glob("../../../src/components/**/index.ts", { eager: true });
console.log("自动注册的组件模块：", modules);

export default {
    ...DefaultTheme,
    enhanceApp({ app }: { app: App }) {
        // ✅ 注册我们写的组件展示组件
        app.component("DemoBlock", DemoBlock);
        // ✅ 注册真实组件库中的组件，方便 demo 中直接用
        // app.component("yf-button", YfButton);
        // app.component("yf-alert", YfAlert);
        for (const path in modules) {
            const mod = modules[path] as any;
            const comp = mod.default;
            if (comp && comp.name) {
                // console.log('组件 comp ==>',comp.name);
                app.component(comp.name, comp);
            } else {
                // console.warn(`[组件注册警告] ${path} 中未导出默认组件或缺少 name 属性`);
            }
        }
    },
    setup() {
        // 自定义全局组件
    },
};
