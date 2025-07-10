// ✅ 注册组件
import type { App } from 'vue'
import DefaultTheme from 'vitepress/theme'
import DemoBlock from '../../components/DemoBlock.vue'
// import YfButton from '@/components/yf-button/index' // 路径一定要对
import YfButton from '../../../src/components/yf-button/index' // 路径一定要对
import YfAlert from '../../../src/components/yf-alert/index' // 路径一定要对
export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component('DemoBlock', DemoBlock)
    app.component('yf-button', YfButton) // ✅ 注册成全局组件
    app.component('yf-alert', YfAlert) // ✅ 注册成全局组件
  }
}
