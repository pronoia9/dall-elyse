import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import glsl from 'vite-plugin-glsl';
import glsl from 'babel-plugin-glsl';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), glsl()],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    sourcemap: true,
  },
  define: {
    'process.env': process.env,
    '__APP_VERSION__': JSON.stringify(process.env.npm_package_version),
  },
});
