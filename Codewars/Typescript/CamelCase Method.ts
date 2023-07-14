//https://www.codewars.com/kata/587731fda577b3d1b0001196/train/typescript

export function camelCase(str: string): string {
  return str
    .split(" ")
    .map((el) => el.slice(0, 1).toUpperCase() + el.slice(1).toLowerCase())
    .join("");
}
