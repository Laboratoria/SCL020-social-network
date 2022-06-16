/// <reference types ="vitest" />
export default {
  test: {
    globals: true,
    include: ['../**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
  root: 'src',
  build: {
    outDir: '../dist',
  },
}