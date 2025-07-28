import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import fs from "fs";

const componentsDir = path.resolve(__dirname, "src/components");
const entryComponents = fs.readdirSync(componentsDir).filter((name) => {
    const entry = path.resolve(componentsDir, name, "index.ts");
    return fs.existsSync(entry);
});

export default defineConfig({
    plugins: [vue()],
    publicDir: false, // 👈 禁止复制 public 文件夹内容
    build: {
        outDir: "dist/es",
        emptyOutDir: false,
        lib: {
            entry: "", // 多入口时此项会被忽略
            formats: ["es"],
        },
        rollupOptions: {
            input: entryComponents.reduce((entries, name) => {
                entries[name] = path.resolve(componentsDir, name, "index.ts");
                return entries;
            }, {}),
            external: ["vue"],
            output: {
                preserveModules: true,
                preserveModulesRoot: "src/components", // ⭐ 关键：控制目录结构
                entryFileNames: "[name]/index.js",
                assetFileNames: "[name]/style.css",
                format: "es",
                // entryFileNames: "components/[name]/index.js",
                // chunkFileNames: "chunks/[name]-[hash].js",
                // assetFileNames: "assets/[name]-[hash][extname]",
            },
        },
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            "@docs": path.resolve(__dirname, "docs"),
            "@demos": path.resolve(__dirname, "docs/demos"),
            "@components": path.resolve(__dirname, "src/components"),
        },
    },
});
