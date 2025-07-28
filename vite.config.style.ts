// vite.config.style.ts - 单独构建样式文件
import path from "path";
import { defineConfig } from "vite";
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [vue()],
    publicDir: false, // 👈 禁止复制 public 文件夹内容
    build: {
        outDir: "dist/style",
        emptyOutDir: false,
        lib: {
            entry: path.resolve(__dirname, "src/style/all.scss"),
            // entry: path.resolve(__dirname, "src/style/index.ts"),
            name: "MyUIStyle",
            fileName: "index",
            formats: ["es"],
        },
        rollupOptions: {
            external: ["vue"],
            output: {
                assetFileNames: "index.css",
            },
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                charset: false,
            },
        },
    },
});
