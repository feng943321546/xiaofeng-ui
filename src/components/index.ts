import type { App } from 'vue' // ✅ 这是类型，不是对象

import YfButton from './yf-button/yf-button.vue'
import YfAlert from './yf-alert/yf-alert.vue'

const components = [YfButton, YfAlert]

const install = (app: App): void => {
  components.forEach(comp => {
    app.component(comp.name || comp.__name, comp)
  })
}

export { YfButton, YfAlert }
export default { install }
