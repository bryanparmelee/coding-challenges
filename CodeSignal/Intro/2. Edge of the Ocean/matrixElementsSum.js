function solution(matrix) {
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0 && i + 1 < matrix.length) {
        matrix[i + 1][j] = 0;
      }
      count += matrix[i][j];
    }
  }
  return count;
}
