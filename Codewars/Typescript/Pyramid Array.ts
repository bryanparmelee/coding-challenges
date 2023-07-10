//https://www.codewars.com/kata/515f51d438015969f7000013/typescript

export function pyramid(n: number) {
  let output: number[][] = [];
  while (n > 0) {
    output.unshift(Array(n).fill(1));
    n--;
  }
  return output;
}
