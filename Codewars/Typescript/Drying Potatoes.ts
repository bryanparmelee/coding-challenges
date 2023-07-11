//https://www.codewars.com/kata/58ce8725c835848ad6000007/train/typescript

export function potatoes(p0: number, w0: number, p1: number): number {
  return Math.floor((w0 * (100 - p0)) / (100 - p1));
}
