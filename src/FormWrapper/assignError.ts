export const type = (obj: any) => Object.prototype.toString.call(obj).slice(8, -1);

export function assignError(value: any) {
  switch (type(value)) {
    case 'Sting':
      return !value.length;
    case 'Number':
      return !value.toString().length;
    case 'Object':
      return !Object.keys(value).length;
    case 'Array':
      return value.length;
    default:
      return false;
  }
}
