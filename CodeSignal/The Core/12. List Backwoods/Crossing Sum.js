//https://app.codesignal.com/arcade/code-arcade/list-backwoods/Nh48Nqxb2zGx2NvYK

function solution(matrix, a, b) {
  let sum = matrix[a].reduce((a, b) => a + b, 0);
  matrix.map((el, i) => {
    if (i !== a) {
      sum += el[b];
    }
  });
  return sum;
}
