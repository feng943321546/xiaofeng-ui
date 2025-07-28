// vite.config.style.ts - 单独构建样式文件
import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import fs from "fs";

const componentsDir = path.resolve(__dirname, "src/components");

const input: Record<string, string> = {};
// 记录已存在的 key，防止重复
const usedNames = new Set<string>();

// 所有组件的 style.scss 路径，用于生成 all.scss
const componentStyles: string[] = [];

// 遍历组件目录，找出每个组件的 style.scss
fs.readdirSync(componentsDir).forEach((name) => {
    const stylePath = path.resolve(componentsDir, name, "style.scss");
    if (fs.existsSync(stylePath)) {
        if (usedNames.has(name)) {
            console.warn(`⚠️ 样式名冲突：${name}，已跳过`);
            return;
        }

        input[name] = stylePath; // 每个组件样式打包为独立 css
        usedNames.add(name);

        componentStyles.push(stylePath); // 用于 all.scss 合并
    }
});

// ✅ 自动生成 all.scss 文件（作为 index.css 入口）
const allScssPath = path.resolve(__dirname, "src/style/all.scss");
const scssContent = componentStyles
    .map((file) => {
        const compName = path.basename(path.dirname(file)); // 组件名
        const relPath = path.relative(path.dirname(allScssPath), file).replace(/\\/g, "/");
        return `@use "${relPath}" as ${compName};`;
    })
    .join("\n");

// 写入 all.scss（供 Vite 打包）
fs.writeFileSync(allScssPath, scssContent, "utf-8");

// 最后加上 index 入口（打包生成 index.css）
if (!usedNames.has("style-common")) {
    input["style-common"] = allScssPath;
}

let indexCssEmitted = false;
export default defineConfig({
    plugins: [vue()],
    publicDir: false, // 👈 禁止复制 public 文件夹内容
    build: {
        outDir: "dist/style",
        cssCodeSplit: true, // 每个输入文件生成独立 CSS
        emptyOutDir: false, // 不清空 dist，避免删除其它构建产物
        rollupOptions: {
            input,
            output: {
                // ✅ 每个入口输出为 xxx.css（不加 hash）  ✅ index 会变成 index.css
                entryFileNames: (chunkInfo) => {
                    // console.log("111111111 \r\n", chunkInfo.name, chunkInfo.name === "style-entry");
                    return chunkInfo.name === "style-entry"
                        ? "[name].css" // index.css 在根目录
                        : "components/[name].css"; // 组件样式输出到 components/ 目录
                },
               
                // ✅ 所有资源文件（包括 .css）也不加 hash 且不放 assets 文件夹
                assetFileNames: "[name][extname]",
                /* assetFileNames: (chunkInfo) => {
                    return chunkInfo.name === "style-entry.css" ? "index.css" : "[name][extname]";
                }, */
            },
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                charset: false, // 移除 BOM，避免警告
            },
        },
    },
});
