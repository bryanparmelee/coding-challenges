//https://app.codesignal.com/arcade/code-arcade/well-of-integration/QmK8kHTyKqh8xDoZk

function solution(a) {
  let output = 0;
  const totalSum = a.reduce((x, y) => x + y);
  const maxL = a.length - 2;
  let firstSum = 0;
  for (let i = 0; i < maxL; i++) {
    firstSum += a[i];
    let secondSum = 0;
    for (let j = i + 1; j < maxL + 1; j++) {
      secondSum += a[j];
      if (
        firstSum === secondSum &&
        secondSum === totalSum - firstSum - secondSum
      ) {
        output++;
      }
    }
  }
  return output;
}
