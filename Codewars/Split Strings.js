//https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript

function solution(str) {
  if (str.length % 2 !== 0) str = str + "_";
  let output = [];
  for (let i = 0; i < str.length - 1; i += 2) {
    output.push(str[i] + str[i + 1]);
  }
  return output;
}
