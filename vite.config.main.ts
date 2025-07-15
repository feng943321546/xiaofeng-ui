// vite.config.main.ts - 生成主入口文件
import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [vue()],
    publicDir: false, // 👈 禁止复制 public 文件夹内容
    build: {
        outDir: "dist",
        lib: {
            entry: path.resolve(__dirname, "src/entry.es.ts"),
            formats: ["es", "cjs"],
            fileName: (format) => `index.${format === 'es' ? 'es' : 'cjs'}.js`,
        },
        rollupOptions: {
            external: ["vue"],
            output: {
                globals: {
                    vue: "Vue",
                },
            },
        },
    },
});
