//https://www.codewars.com/kata/541c8630095125aba6000c00/typescript

export const digitalRoot = (n: number): number => {
  let sum: number = n
    .toString()
    .split("")
    .reduce((a, b) => Number(a) + Number(b), 0);
  return sum.toString().length > 1 ? digitalRoot(sum) : sum;
};

export function digitalRoot2(n: number): number {
  return ((n - 1) % 9) + 1;
}
