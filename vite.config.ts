// https://vite.dev/config/
//  配置 public access 和 alias
import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import type { ComponentResolver } from "unplugin-vue-components";

// 自定义一个 resolver，用来按需加载 my-ui 组件
const MyUIResolver = (): ComponentResolver => {
    return (name: string) => {
        // 如果组件名以 Yf 开头，则认为是 my-ui 组件
        if (name.startsWith("Yf")) {
            // 将 Yf 前缀去掉，并转换为小写
            const comp = name.replace(/^Yf/, "").toLowerCase();
            return {
                name,
                from: `my-ui/es/${comp}/index.js`,
                sideEffects: `my-ui/es/${comp}/style.css`,
            };
        }
    };
};
export default defineConfig({
    plugins: [
        vue(),
        Components({
            resolvers: [MyUIResolver()],
        }),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@docs": path.resolve(__dirname, "./docs"),
            "@demos": path.resolve(__dirname, "./docs/demos"),
            "@components": path.resolve(__dirname, "./src/components"),
        },
    },
    // ✅ 将 demo 映射为可 fetch 的路径（重要）
    // 这里的 publicDir 是 Vite 的默认配置，指向项目根目录下的 public 文件夹
    publicDir: "public", // 仍保留原样（如果你使用 public 文件）
    server: {
        fs: {
            allow: [
                ".", // 当前项目
                path.resolve(__dirname, "./"), // 项目根目录
                path.resolve(__dirname, "src"), // 明确允许访问 src
                path.resolve(__dirname, "docs"), // 明确允许 docs
            ],
        },
    },

    build: {
        lib: {
            entry: path.resolve(__dirname, "src/index.ts"), // 整库入口
            // entry: path.resolve(__dirname, "src/components/index.ts"), // 整库入口
            name: "MyUIXiaoFeng", // 库名
            formats: ["es", "umd"],
            fileName: (format) => `my-ui.${format}.js`,
        },
        rollupOptions: {
            external: ["vue"], // 把 Vue 排除
            output: {
                globals: { vue: "Vue" }, // UMD 模式下全局变量名
            },
        },
    },
});
