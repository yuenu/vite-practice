import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base:'',
  root: path.resolve(__dirname, "src"),
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, 'src/index.html'),
      }
    }
  }
})