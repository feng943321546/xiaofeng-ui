// docs/.vitepress/config.ts
//  ✅ 侧边栏配置
import { defineConfig } from 'vitepress'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  title: 'My UI XiaoFeng',
  description: '基于 Vue 3 + TypeScript 的组件库',

  themeConfig: {
    nav: [{ text: '组件', link: '/components/yf-button' }],
    sidebar: {
      '/components/': [
        {
          text: '基础组件',
          items: [
            { text: 'Button 按钮', link: '/components/yf-button' },
            { text: 'Alert 提示', link: '/components/yf-alert' }
          ]
        }
      ]
    }
  },

  // 👇 关键配置：向下兼容型写法
  vite: {
    server: {
      fs: {
        allow: [resolve(__dirname, '../')] // 启用访问 demos
      }
    },
    resolve: {
      alias: {
        '@demos': resolve(__dirname, '../demos')
      }
    }
  } as any // 👈 如果报错就加这个
})
