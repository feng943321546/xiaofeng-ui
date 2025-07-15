// vite.config.dts.ts
import { defineConfig } from "vite";
import dts from "rollup-plugin-dts";
import path from "path";

export default defineConfig({
    publicDir: false, // 👈 禁止复制 public 文件夹内容
    build: {
        outDir: "dist/entry-types",
        // emptyOutDir: false, // ✅ 不清空 dist/entry-types
        lib: {
            // ✅ 注意这里还是“输入源”
            entry: path.resolve(__dirname, "dist/types/components/index.d.ts"),
            // entry: path.resolve(__dirname, 'dist/types/index.d.ts'),
            formats: ["es"], // 输出格式为 ES Module
        },
        rollupOptions: {
            // input: path.resolve(__dirname, 'dist/types/components/index.d.ts'),
            // output: {
            //   dir: 'dist/es',
            //   entryFileNames: '[name].d.ts',
            // },
            plugins: [dts()],
        },
    },
});
