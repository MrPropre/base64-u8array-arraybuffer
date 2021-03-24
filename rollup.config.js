import { version, license } from './package.json'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import { babel } from '@rollup/plugin-babel'
import eslint from '@rollup/plugin-eslint'

const name = 'base64u8ArrayBuffer'
const banner = `/*! base64-u8array-arraybuffer v${version} | ${license} */`

const babelOptions = {
  babelHelpers: 'bundled',
  exclude: 'node_modules/**'
}

export default [
  {
    input: 'src/index.js',
    output: [
      {
        file: 'dist/base64-u8array-arraybuffer.js',
        name,
        format: 'umd',
        banner
      },
      {
        file: 'dist/base64-u8array-arraybuffer.min.js',
        name,
        format: 'umd',
        banner,
        plugins: [
          terser()
        ]
      },
      {
        file: 'dist/base64-u8array-arraybuffer.amd.js',
        format: 'amd',
        banner
      },
      {
        file: 'dist/base64-u8array-arraybuffer.amd.min.js',
        format: 'amd',
        banner,
        plugins: [
          terser()
        ]
      },
      {
        file: 'dist/base64-u8array-arraybuffer.iife.js',
        name,
        format: 'iife',
        banner
      },
      {
        file: 'dist/base64-u8array-arraybuffer.iife.min.js',
        name,
        format: 'iife',
        banner,
        plugins: [
          terser()
        ]
      }
    ],
    plugins: [
      nodeResolve(),
      eslint(),
      babel(babelOptions)
    ]
  },
  {
    input: 'src/index.js',
    output: [
      {
        file: 'dist/base64-u8array-arraybuffer.esm.js',
        format: 'es',
        banner
      },
      {
        file: 'dist/base64-u8array-arraybuffer.esm.min.js',
        format: 'es',
        banner,
        plugins: [
          terser()
        ]
      }
    ]
  }
]
