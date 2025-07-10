const { log } = require("console")

// 文件：babel.config.js
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ['import', {
      libraryName: 'my-ui',                   // 你的组件库包名
      customName: (name) => {
        console.log(`自动引入组件：${name}`) // 打印日志，查看自动引入的组件名
        // name: 'YfButton' → 'my-ui/es/button/index.js'
        const comp = name.replace(/^Yf/, '').toLowerCase()
        // 返回组件的路径
        return `my-ui/es/${comp}/index.js`
      },
      style: (name) => {
        // 自动引入对应组件的样式
        const comp = name.replace(/^Yf/, '').toLowerCase()
        return `my-ui/es/${comp}/style.css`
      }
    }, 'my-ui']
  ]
}
