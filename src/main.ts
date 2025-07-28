import { createApp } from 'vue'
import App from './App.vue'
import './style/reset.css'
import './style/style.css'
import './style/common.scss'
// 引入组件库
// import XiaoFengUI from './components/index'
// console.log('引入组件库aaaaaaaaaa',XiaoFengUI);

// 如果您正在使用CDN引入，请删除下面一行。
// import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
// app.use(XiaoFengUI)
// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//   app.component(key, component)
// }



app.mount('#app')
