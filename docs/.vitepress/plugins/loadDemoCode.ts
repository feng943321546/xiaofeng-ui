import fs from 'fs'
import path from 'path'

export function getDemoCode(id: string) {
  const filePath = path.resolve(__dirname, '../../demos', `${id}.vue`)
  try {
    const code = fs.readFileSync(filePath, 'utf-8')
    return code
  } catch {
    return `<p style="color: red;">找不到 demo 文件：${id}.vue</p>`
  }
}
