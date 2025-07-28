const fg = require('fast-glob')
const fs = require('fs')
const path = require('path')

const output = path.resolve(__dirname, '../src/style/index.ts')

async function generate() {
  const files = await fg('src/components/**/style.scss', {
    absolute: false,
  })

  if (files.length === 0) {
    console.warn('⚠️ 没有找到组件样式文件')
    return
  }

  const content = files
    // .map(file => `import '../${file.replace(/\\/g, '/')}'`)
    .map(file => `import '../${file.replace(/^src\//, '').replace(/\\/g, '/')}'`)
    .join('\n')

  fs.writeFileSync(output, content + '\n', 'utf-8')

  console.log(`✅ 成功生成 src/style/index.ts，包含 ${files.length} 个组件样式`)
}

generate()
