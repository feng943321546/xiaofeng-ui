// vite.config.build.ts
import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'rollup-plugin-dts'
import cssOnly from 'rollup-plugin-css-only'

// 工具函数：快速 resolve 路径
const resolve = (p: string) => path.resolve(__dirname, p)

// 组件库入口文件（src/index.ts 中统一导出）
const entry = resolve('./src/index.ts')

// 公共配置
// 不把 Vue 打包进去，减小体积
const external = ['vue']

// 输出格式：ESM   构建 ES Module 格式（Tree Shaking 友好）
const esBuild = defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry,
      formats: ['es'],
      fileName: 'index',
    },
    outDir: 'dist/es',
    rollupOptions: {
      external,
      output: {
        preserveModules: true, // 保留模块结构（组件目录不被打平）
        preserveModulesRoot: 'src',
        entryFileNames: '[name].js', // 自定义文件名，避免默认 hash 名称
      },
    },
  },
})

// 输出格式：CommonJS   构建 CommonJS 格式（兼容老项目）
const libBuild = defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry,
      formats: ['cjs'],
      fileName: 'index',
    },
    outDir: 'dist/lib',
    rollupOptions: {
      external,
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: '[name].js',
      },
    },
  },
})

// 类型构建（使用 rollup-plugin-dts）  构建类型文件 .d.ts 输出
const typeBuild = defineConfig({
  build: {
    outDir: 'dist/types',
    lib: {
      entry: resolve('dist/types/index.d.ts'), // 注意：前提是你已经用 tsc 生成好了 d.ts 文件
      formats: ['es'],
    },
    rollupOptions: {
      plugins: [dts()],
    },
  },
})

export default [esBuild, libBuild, typeBuild]
