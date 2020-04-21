export function isValidArray(arr: any[]) {
  return !Array.isArray(arr) || !arr.length;
}
