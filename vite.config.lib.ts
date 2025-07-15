// vite.config.lib.ts
import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [vue()],
    publicDir: false, // 👈 禁止复制 public 文件夹内容
    build: {
        outDir: "dist/lib",
        lib: {
            entry: path.resolve(__dirname, "src/components/index.ts"),
            formats: ["cjs"],
            fileName: "index",
        },
        rollupOptions: {
            external: ["vue"],
            output: {
                preserveModules: true,
                preserveModulesRoot: "src",
                entryFileNames: "[name].js",
            },
        },
    },
});
