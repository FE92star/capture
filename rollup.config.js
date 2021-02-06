import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import ts from 'rollup-plugin-typescript2'
// import typescript from '@rollup/plugin-typescript'

export default {
  input: './packages/sdk/index.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'umd',
    name: 'sdk'
  },
  plugins: [
    resolve(),
    commonjs({
      exclude: 'node_modules'
    }),
    ts({
      useTsconfigDeclarationDir: true,
      clean: true
    })
  ]
}
