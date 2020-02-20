export const toCamelCase = (str: string): string => {
  if (typeof str !== 'string') {
    throw new TypeError('toCamelCase called on non-string');
  }

  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => (index === 0 ? word.toLowerCase() : word.toUpperCase()))
    .replace(/\s+/g, '');
};
