//https://www.codewars.com/kata/570a6a46455d08ff8d001002/typescript

export function noBoringZeros(n: number): number {
  if (n === 0) {
    return n;
  } else if (n % 10 !== 0) {
    return n;
  } else {
    return noBoringZeros(n / 10);
  }
}

export function noBoringZeros2(n: number): number {
  if (n) {
    while (n % 10 == 0) {
      n = Math.floor(n / 10);
    }
  }
  return n;
}
