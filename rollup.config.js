import cjs from '@rollup/plugin-commonjs'
// eslint-disable-next-line import/no-unresolved
import json from '@rollup/plugin-json'
import {dependencies} from './package.json'

const plugins = [cjs(), json()]

const external = ['path', 'fs', ...Object.keys(dependencies)]

export default [
  {
    input: 'src/index.js',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
      },
      {
        file: 'dist/index.mjs',
        format: 'esm',
      },
    ],
    external,
    plugins,
  },
]
