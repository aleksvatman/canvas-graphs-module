import { resolve } from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'DiagramSheet',
      fileName: 'index'
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: "react"
        }
      }
    }
  },
  plugins: [react(), dts({ tsconfigPath: './tsconfig.app.json' })],
})
