//https://app.codesignal.com/arcade/code-arcade/mirror-lake/RpoP4Aqa5mbmC8koC

function solution(n) {
  let steps = [n];
  while (n) {
    let next = n - dSum(n);
    steps.push(next);
    n = next;
  }
  let stepsSum = steps.map((el) => dSum(el));
  let counts = {};
  stepsSum.map((el) => {
    return counts[el] ? (counts[el] = counts[el] + 1) : (counts[el] = 1);
  });
  return Object.keys(counts).reduce((a, b) => {
    if (counts[a] > counts[b]) {
      return Number(a);
    } else if (counts[b] > counts[a]) {
      return Number(b);
    } else if (counts[a] === counts[b]) {
      return Math.max(a, b);
    }
  });
}

function dSum(num) {
  let sum = 0;
  while (num) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

function solution2(n) {
  return n >= 999 ? 18 : n >= 9 ? 9 : n;
}
