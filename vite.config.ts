import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import tsConfigPaths from 'vite-tsconfig-paths'
import * as packageJson from './package.json'

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
