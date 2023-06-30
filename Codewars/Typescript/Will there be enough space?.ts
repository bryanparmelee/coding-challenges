//https://www.codewars.com/kata/5875b200d520904a04000003/train/typescript

export function enough(cap: number, on: number, wait: number): number {
  return on + wait > cap ? on + wait - cap : 0;
}
