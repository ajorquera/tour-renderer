import { defineConfig } from "rollup";
import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'
import resolve from '@rollup/plugin-node-resolve'
import alias from '@rollup/plugin-alias';
import styles from "rollup-plugin-styles";
import less from 'rollup-plugin-less';

export default defineConfig([
    {
        input: `src/index.ts`,
        plugins: [esbuild(), 
          
          alias({
            entries: [
              { find: 'react', replacement: 'preact/compat' },
              { find: 'react-dom/test-utils', replacement: 'preact/test-utils' },
              { find: 'react-dom', replacement: 'preact/compat' },
              { find: 'react/jsx-runtime', replacement: 'preact/jsx-runtime' }
            ]
          }),
          
          styles( {mode: ["extract", "./style.css"]}),
          resolve(),
        
        ],
        output: [
          {
            file: `dist/TourRenderer.js`,
            format: 'cjs',
            sourcemap: true,
            exports: 'default',
            assetFileNames: "[name][extname]",
          },
        ]
      },
      {
        input: `src/index.ts`,
        plugins: [dts(), less()],
        output: {
          file: `dist/TourRenderer.d.ts`,
          format: 'es',
        },
      }
])