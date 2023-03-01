//https://app.codesignal.com/arcade/code-arcade/spring-of-integration/dwA8RtDF86WucuoaQ

function solution(inputArray) {
  let tmp = [];
  let j = 0;
  while (inputArray.length > 1) {
    tmp = [];
    for (let i = 0; i < inputArray.length; i += 2) {
      tmp.push(inputArray.slice(i, i + 2));
    }
    inputArray = tmp.map((pair) => (j ? pair[0] * pair[1] : pair[0] + pair[1]));
    j = (j + 1) % 2;
  }
  return inputArray[0];
}
