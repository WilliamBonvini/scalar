import vue from '@vitejs/plugin-vue'
import path from 'path'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import { defineConfig } from 'vitest/config'

import pkg from './package.json'

export default defineConfig({
  plugins: [vue(), cssInjectedByJsPlugin()],
  build: {
    cssCodeSplit: false,
    minify: false,
    ssr: true,
    lib: {
      entry: 'src/index.ts',
      name: '@scalar/swagger-editor',
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        '@codemirror/state',
        '@codemirror/view',
        '@hocuspocus/provider',
        '@lezer/common',
        '@lezer/javascript',
        '@lezer/lr',
        '@lezer/python',
        '@scalar/swagger-editor',
        '@scalar/themes',
        '@scalar/use-codemirror',
        '@scalar/use-markdown',
        '@xmldom/xmldom',
        'vue',
        ...Object.keys(pkg.dependencies || {}).filter(
          (item) => !item.startsWith('@scalar'),
        ),
      ],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'index.css') {
            return 'style.css'
          }

          return assetInfo.name ?? 'default'
        },
      },
    },
  },
  resolve: {
    alias: [
      // Resolve the uncompiled source code for all @scalar packages
      // It’s working with the alias, too. It’s just required to enable HMR.
      {
        // Resolve the uncompiled source code for all @scalar packages
        // @scalar/* -> packages/*/
        // (not @scalar/*/style.css)
        find: /^@scalar\/([^/]+)$/,
        replacement: path.resolve(__dirname, '../$1/src/index.ts'),
      },
    ],
  },
  test: {
    coverage: {
      enabled: true,
      reporter: 'text',
    },
  },
})
