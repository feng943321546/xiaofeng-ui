import { createVNode, render } from 'vue'
import YfMessageBox from './yf-message-box.vue'
import type { MessageBoxOptions } from './types'

/*let messageQueue: {
  options: MessageBoxOptions
  resolve: (val: boolean) => void
  reject: (reason?: any) => void
}[] = []

let currentContainer: HTMLDivElement | null = null

const showNextMessage = () => {
  if (messageQueue.length === 0) return
  
  const { options, resolve, reject } = messageQueue.shift()!
  
  const container = document.createElement('div')
  currentContainer = container
  document.body.appendChild(container)
  
  const vnode = createVNode(YfMessageBox, {
    ...options,
    onConfirm: () => {
      render(null, container)
      // document.body.removeChild(container)
      container.remove()
      currentContainer = null
      showNextMessage()
      resolve(true)
    },
    onCancel: () => {
      render(null, container)
      // document.body.removeChild(container)
      container.remove()
      currentContainer = null
      showNextMessage()
      reject(new Error('cancel'))
    },
  })
  
  render(vnode, container)
}

export const showMessageBox = (options: MessageBoxOptions) => {
  return new Promise<boolean>((resolve, reject) => {
    messageQueue.push({ options, resolve, reject })
    if (!currentContainer) {
      showNextMessage()
    }
  })
}*/


export const showMessageBox = (options: MessageBoxOptions) => {
  return new Promise((resolve, reject) => {
    const container = document.createElement('div')
    document.body.appendChild(container)

    const vnode = createVNode(YfMessageBox, {
      ...options,
      onConfirm: () => {
        render(null, container)
        container.remove()
        resolve(true)
      },
      onCancel: () => {
        render(null, container)
        container.remove()
        reject(new Error('cancel'))
      }
    })

    render(vnode, container)
  })
}
