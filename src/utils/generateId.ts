export function generateId(str: string): string {
  return Math.random()
    .toString(36)
    .replace('0.', str || '');
}
