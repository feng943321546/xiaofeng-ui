// vite.config.dts.ts
import { defineConfig } from 'vite'
import dts from 'rollup-plugin-dts'
import path from 'path'

export default defineConfig({
  build: {
    outDir: 'dist/es',
    lib: {
      entry: path.resolve(__dirname, 'dist/types/components/index.d.ts'),
      formats: ['es']
    },
    rollupOptions: {
      input: path.resolve(__dirname, 'dist/types/components/index.d.ts'),
      output: {
        dir: 'dist/es',
        entryFileNames: '[name].d.ts',
      },
      plugins: [dts()],
    }
  }
})
