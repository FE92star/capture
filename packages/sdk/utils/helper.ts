/* 替换原生的方法 */
export function replacePrimitive(
  source: {
    [key: string]: any
  },
  name: string,
  repalcement: (...args: any[]) => any
) {
  if (!(name in source)) return
  const origin = source[name] // 取出原生的方法
  const replacementCb = repalcement(origin)
  if (typeof replacementCb === 'function') {
    source[name] = replacementCb
  }
}
