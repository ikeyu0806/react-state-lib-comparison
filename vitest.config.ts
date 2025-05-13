import { UserConfig, defineConfig } from 'vitest/config'
import path from 'path'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()] as UserConfig['plugins'],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './__tests__/setup.ts',
    alias: {
      '@': path.resolve(__dirname, './'),
    },
    coverage: {
      provider: 'v8',
      exclude: [
        '__tests__',
        '.next',
        '.storybook',
        'node_modules',
        'types',
        'next.config.mjs',
        'postcss.config.js',
        '**/*.stories.ts',
      ],
    },
  },
})
