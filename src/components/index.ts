<<<<<<< HEAD
import type { App } from 'vue'

import YfAlert from './yf-alert'
import YfButton from './yf-button'

const components = [
  YfAlert,
  YfButton
]

const install = (app: App): void => {
  components.forEach(comp => {
    const compName = comp.name || comp.__name
    if (compName) {
      app.component(compName, comp)
    }
  })
}

export default {
  install
}

export {
  YfAlert,
  YfButton
}
=======
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
>>>>>>> b7363b15676ea77df50656774281813ac2cad632
