import { defineConfig } from "rollup";
import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'

export default defineConfig([
    {
        input: `src/index.ts`,
        plugins: [esbuild()],
        output: [
          {
            file: `dist/TourRenderer.js`,
            format: 'cjs',
            sourcemap: true,
            exports: 'default',
          },
        ]
      },
      {
        input: `src/index.ts`,
        plugins: [dts()],
        output: {
          file: `dist/TourRenderer.d.ts`,
          format: 'es',
        },
      }
])