//https://app.codesignal.com/arcade/code-arcade/list-backwoods/kfwTN8pdx9uP8bcHS

function solution(matrix) {
  let y = matrix.length - 1;
  let x = 0;
  while (x < y) {
    [matrix[x][x], matrix[x][y]] = [matrix[x][y], matrix[x][x]];
    [matrix[y][x], matrix[y][y]] = [matrix[y][y], matrix[y][x]];
    y--;
    x++;
  }
  return matrix;
}
