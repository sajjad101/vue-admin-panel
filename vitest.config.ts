import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: 'test/vitest/setup-file.ts'
  },
  plugins: [vue(), tsconfigPaths()],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
