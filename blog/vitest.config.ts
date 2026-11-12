import { defineConfig } from 'vitest/config';

export default defineConfig({
  esbuild: { jsx: 'automatic' },
  test: {
    environment: 'jsdom',
    include: ['src/**/*.test.{ts,tsx}'],
    setupFiles: ['./src/test/setup.ts'],
    // keep CSS Module class names readable so tests can assert on state classes
    css: { include: [/\.module\.css$/], modules: { classNameStrategy: 'non-scoped' } },
  },
});
