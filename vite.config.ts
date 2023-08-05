import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsConfigPaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'
import * as packageJson from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsConfigPaths(),
    dts({
      include: ['src'],
    }),
  ],
  build: {
    lib: {
      entry: resolve('src', 'index.ts'),
      name: 'atomplexus',
      formats: ['es', 'cjs'],
      fileName: (format) => `atomplexus.${format === 'cjs' ? 'cjs' : 'es.js'}`,
    },
    minify: true,
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  },
})
