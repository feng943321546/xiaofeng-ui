// <reference types="vite/client" />

// 支持 .vue?raw 文件导入为 string
declare module '*.vue?raw' {
  const content: string
  export default content
}
