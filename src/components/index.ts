import type { App } from 'vue'

import YfAlert from './yf-alert'
import YfButton from './yf-button'
import YfCard from './yf-card'
import YfIcon from './yf-icon'
import YfInput from './yf-input'
import YfMessage from './yf-message'
import YfMessageBox from './yf-message-box'

const components = [
  YfAlert,
  YfButton,
  YfCard,
  YfIcon,
  YfInput,
  YfMessage,
  YfMessageBox
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
  YfButton,
  YfCard,
  YfIcon,
  YfInput,
  YfMessage,
  YfMessageBox
}
