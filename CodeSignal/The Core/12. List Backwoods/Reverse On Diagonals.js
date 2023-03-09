//https://app.codesignal.comatrix/arcade/code-arcade/list-backwoods/Akspcu9ewiYapWkrp

function solution(matrix) {
  let y = matrix.length - 1;
  let x = 0;
  while (x < y) {
    [matrix[x][x], matrix[y][y]] = [matrix[y][y], matrix[x][x]];
    [matrix[x][y], matrix[y][x]] = [matrix[y][x], matrix[x][y]];
    x++;
    y--;
  }
  return matrix;
}
