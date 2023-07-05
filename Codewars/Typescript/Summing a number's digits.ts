//https://www.codewars.com/kata/52f3149496de55aded000410/train/typescript

export function sumDigits(n: number): number {
  return n
    .toString()
    .replace(/[^\d]/g, "")
    .split("")
    .map(Number)
    .reduce((a, b) => a + b, 0);
}
