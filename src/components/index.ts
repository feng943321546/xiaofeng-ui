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
