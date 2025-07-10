// rollup.config.dts.ts
import dts from 'rollup-plugin-dts'
import path from 'path'

export default {
  input: path.resolve(__dirname, 'dist/types/components/index.d.ts'),
  output: {
    file: path.resolve(__dirname, 'dist/es/index.d.ts'),
    format: 'es'
  },
  plugins: [dts()]
}
