//https://app.codesignal.com/arcade/code-arcade/well-of-integration/3QMXNwGfvLMoQwed7

function solution(inputArray) {
  const firstZero = inputArray.indexOf(0);
  const toAdd = inputArray.slice(0, firstZero);
  return toAdd.reduce((a, b) => a + b, 0);
}
