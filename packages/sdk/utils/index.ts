export const objectToSring = Object.prototype.toString
export const typeToString = (value: unknown): string => objectToSring.call(value)
/* 判断是否为原生对象 */
export const isPrimitiveOject = (object: unknown): boolean => typeToString(object) === '[object Object]'
