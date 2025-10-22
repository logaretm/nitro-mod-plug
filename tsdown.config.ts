import { defineConfig } from 'tsdown'

export default defineConfig({
  // ...config options
  entry: [
    './src/index.ts',
    './src/plugin.ts'
  ],
  external: [/nitropack/]
})
