//https://www.codewars.com/kata/5264d2b162488dc400000001/train/typescript

export function spinWords(words: string): string {
  return words
    .split(" ")
    .map((word) =>
      word.length >= 5 ? word.split("").reverse().join("") : word
    )
    .join(" ");
}
