//https://www.codewars.com/kata/56606694ec01347ce800001b/typescript

export function isTriangle(a: number, b: number, c: number): boolean {
  return a + b > c && b + c > a && c + a > b;
}
