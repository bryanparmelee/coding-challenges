//https://app.codesignal.com/arcade/code-arcade/chess-tavern/FfjPkYvo9ah6wgXem

function solution(boardSize, initPosition, initDirection, k) {
  const h = boardSize[0] - 1;
  const w = boardSize[1] - 1;
  let [y, x] = initPosition;
  let [a, b] = initDirection;
  let yK = k % (boardSize[0] * 2);
  let xK = k % (boardSize[1] * 2);
  while (yK > 0) {
    if (y === 0 || y === h) {
      a *= -1;
      yK = yk - 2;
    } else {
      y += a;
      yK--;
    }
  }
  while (xK > 0) {
    if (x === 0 || x === w) {
      b *= -1;
      xK = xK - 2;
    } else {
      x += b;
      xK--;
    }
  }
  return [y, x];
}
