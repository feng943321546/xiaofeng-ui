import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import fs from "fs";

const componentsDir = path.resolve(__dirname, "src/components");
const exportsFile = path.resolve(__dirname, "src/utils/exports.ts");
const tempDir = path.resolve(__dirname, ".temp/exports"); // 临时目录，用于每个方法入口

// 1. 清空 .temp 目录
fs.rmSync(tempDir, { recursive: true, force: true });
fs.mkdirSync(tempDir, { recursive: true });

// 2. 读取组件目录作为入口
const entryComponents = fs.readdirSync(componentsDir).filter((name) => {
    const entry = path.resolve(componentsDir, name, "index.ts");
    return fs.existsSync(entry);
});

// 3. 读取 exports.ts 的所有导出项
const exportsContent = fs.readFileSync(exportsFile, "utf-8");
const exportMatches = [...exportsContent.matchAll(/export\s*\{\s*(\w+)\s*\}/g)];

const manualEntries: Record<string, string> = {};
for (const [, exportName] of exportMatches) {
  const entryFile = path.resolve(tempDir, `${exportName}.ts`);
  fs.writeFileSync(entryFile, `export { ${exportName} } from '../../src/utils/exports'`);
  manualEntries[exportName] = entryFile;
}


// ✅ 新增：添加非组件导出文件，如 showMessage
// const manualEntry: Record<string, string> = {
//     "show-message": path.resolve(__dirname, "src/utils/exports.ts"), // 👈 key 是输出文件夹名
// };
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
            input: {
                ...entryComponents.reduce((entries, name) => {
                    entries[name] = path.resolve(componentsDir, name, "index.ts");
                    return entries;
                }, {} as Record<string, string>),
                ...manualEntries,  // ✅ 加入额外导出的方法
            },
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
