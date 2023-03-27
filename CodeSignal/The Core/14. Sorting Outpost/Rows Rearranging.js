//https://app.codesignal.com/arcade/code-arcade/sorting-outpost/vuXQuYFReJPe6hHAf

function solution(matrix) {
  let sorted = matrix.sort((a, b) => a[0] - b[0]);
  for (let x = 0; x < sorted[0].length; x++) {
    for (let y = 0; y < sorted.length - 1; y++) {
      if (sorted[y][x] >= sorted[y + 1][x]) {
        return false;
      }
    }
  }
  return true;
}
