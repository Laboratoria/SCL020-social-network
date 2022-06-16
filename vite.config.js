export default {
  root: 'src',
  build: {
    outDir: '../dist',
  },
  test: {globals:true,
    include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}']
  },
  
};


