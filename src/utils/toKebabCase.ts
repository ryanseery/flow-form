export function toKebabCase(str: string): string {
  if (typeof str !== 'string') {
    throw new TypeError('toKebabCase called on non-string');
  }
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase();
}
