const DOMGlobals = ['window', 'document']
const NodeGlobals = ['module', 'require']

module.exports = {
  parser: '@typescript-eslint/parser', // 自定义解析器-将 TypeScript 转换成与 estree 兼容的形式，以便在ESLint中使用
  parserOptions: {
    sourceType: 'module'
  },
  rules: {
    'no-unused-vars': [
      'error',
      // we are only using this rule to check for unused arguments since TS
      // catches unused variables but not args.
      // 用于检测函数参数是否有被使用，因为TS自身可以捕获到定义未使用的变量
      { varsIgnorePattern: '.*', args: 'none' }
    ],
    // most of the codebase are expected to be env agnostic
    'no-restricted-globals': ['error', ...DOMGlobals, ...NodeGlobals],
    // since we target ES2015 for baseline support, we need to forbid object
    // rest spread usage (both assign and destructure)
    'no-restricted-syntax': [
      'error',
      'ObjectExpression > SpreadElement',
      'ObjectPattern > RestElement'
    ],
    'semi': ["error", "never"]
  }
}
