//https://app.codesignal.com/arcade/code-arcade/waterfall-of-integration/L7KWEYbPoornGyf7K

function solution(matrix) {
  let count = 0;
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[0].length; x++) {
      if (matrix[y][x]) {
        if (!matrix[y - 1] || !matrix[y - 1][x]) count++;
        if (!matrix[y][x - 1]) count++;
        if (!matrix[y][x + 1]) count++;
        if (!matrix[y + 1] || !matrix[y + 1][x]) count++;
      }
    }
  }
  return count;
}
