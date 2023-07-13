//https://www.codewars.com/kata/57a083a57cb1f31db7000028/typescript

export function powersOfTwo(n: number): number[] {
  let output: number[] = [];
  for (let i = 0; i <= n; i++) {
    output.push(Math.pow(2, i));
  }
  return output;
}
