//https://www.codewars.com/kata/55edaba99da3a9c84000003b/typescript

export function divisibleBy(numbers: number[], divisor: number): number[] {
  return numbers.filter((num) => num % divisor === 0);
}
