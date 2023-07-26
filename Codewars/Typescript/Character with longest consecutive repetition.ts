//https://www.codewars.com/kata/586d6cefbcc21eed7a001155/train/typescript

export function longestRepetition(text: string): [string, number] {
  let result: [string, number] = ["", 0];
  for (let i = 0; i < text.length; null) {
    let start: number = i++;
    while (i < text.length && text[i] === text[start]) i++;
    if (i - start > result[1]) result = [text[start], i - start];
  }
  return result;
}

export function longestRepetition2(text: string): [string, number] {
  const output: [string, number] = ["", 0];
  text.match(/(.)\1*/g)?.forEach((match) => {
    if (match?.length > output[1]) {
      output[0] = match.charAt(0);
      output[1] = match.length;
    }
  });
  return output;
}
