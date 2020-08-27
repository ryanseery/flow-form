function handleArr(arr: { [key: string]: boolean }[]) {
  return arr
    .map((a: { [key: string]: boolean }) =>
      Object.entries(a).every(([_, v]) => v === false),
    )
    .every(b => b === false);
}

export function deepCheck(obj: { [key: string]: boolean | [] }) {
  return Object.entries(obj)
    .reduce(
      (acc: any[], [_, v]) =>
        Array.isArray(v) ? [...acc, handleArr(v)] : [...acc, v],
      [],
    )
    .every((a: any) => a === false);
}
