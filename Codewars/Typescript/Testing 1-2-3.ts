//https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/typescript

export function number(array: string[]): string[] {
  return array.map((el, i) => {
    return `${i + 1}: ${el}`;
  });
}
