//https://www.codewars.com/kata/539ee3b6757843632d00026b/train/typescript

export function capitals(word: string): number[] {
  let output: number[] = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) output.push(i);
  }
  return output;
}
