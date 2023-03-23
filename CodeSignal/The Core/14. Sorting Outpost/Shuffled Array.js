//https://app.codesignal.com/arcade/code-arcade/sorting-outpost/s4BEFMcpLdGbjX9KX

function solution(shuffled) {
  for (let i = 0; i < shuffled.length; i++) {
    let arr = [...shuffled];
    arr.splice(i, 1);
    if (arr.reduce((a, b) => a + b, 0) === shuffled[i]) {
      return arr.sort((a, b) => a - b);
    }
  }
}

function solution2(shuffled) {
  const sumValue = shuffled.reduce((a, b) => a + b) / 2;
  const index = shuffled.indexOf(sumValue);
  const newArray = [...shuffled];
  newArray.splice(index, 1);
  return newArray.sort((a, b) => a - b);
}
