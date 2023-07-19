//https://www.codewars.com/kata/56efc695740d30f963000557/train/typescript

export function toAlternatingCase(s: string): string {
  return s
    .split("")
    .map((el) =>
      el === el.toLowerCase() ? el.toUpperCase() : el.toLowerCase()
    )
    .join("");
}
