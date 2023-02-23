//https://app.codesignal.com/arcade/code-arcade/well-of-integration/x3ix7CY93z2bwKDtG

function solution(a) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === 1) {
      a[i] = 0;
      for (let k = i - 1; k >= 0; k--) {
        a[k] = a[k] === 0 ? 1 : 0;
      }
    }
  }
  return a;
}
