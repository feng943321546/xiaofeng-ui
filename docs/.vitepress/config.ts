// docs/.vitepress/config.ts
//  ✅ 侧边栏配置
import { defineConfig } from "vitepress";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    base: '/my-ui-library/', // 👈 一定要加仓库名 + 结尾斜杠，这个写的是GitHub的仓库名
    title: "My UI XiaoFeng",
    description: "基于 Vue 3 + TypeScript 的组件库",
    outDir: "../dist/docs", // outDir 是 相对于 docs 目录 来写的   所以 ../dist/docs 就会指向项目根目录下的 dist/docs
    themeConfig: {
        nav: [
            { text: "首页", link: "/" },
            { text: "组件", link: "/components/yf-button" },
        ],
        sidebar: {
            "/components/": [
                {
                    text: "基础组件",
                    items: [
                        { text: "Button 按钮", link: "/components/yf-button" },
                        { text: "Alert 提示", link: "/components/yf-alert" },
                    ],
                },
            ],
        },
    },

    // 👇 关键配置：向下兼容型写法
    vite: {
        server: {
            fs: {
                allow: [resolve(__dirname, "../")], // 启用访问 demos
            },
        },
        resolve: {
            alias: {
                "@demos": resolve(__dirname, "../demos"),
            },
        },
    } as any, // 👈 如果报错就加这个
});
