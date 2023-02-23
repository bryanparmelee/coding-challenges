//https://app.codesignal.com/arcade/code-arcade/well-of-integration/Z9opBsx5fX6XfQJdt

function solution(s) {
  let output = [];
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] >= s[i + 1]) {
      output.push(false);
    }
  }
  return output.length === 0;
}

function solution2(s) {
  return s == [...new Set(s)].sort().join("");
}
