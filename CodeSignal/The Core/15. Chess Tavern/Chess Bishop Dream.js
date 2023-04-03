//https://app.codesignal.com/arcade/code-arcade/chess-tavern/FfjPkYvo9ah6wgXem

function solution(boardSize, initPosition, initDirection, k) {
  return [0, 1].map((i) => {
    const mod = boardSize[i] * 2;
    const mid = (mod - 1) / 2;
    const mad = initPosition[i] + initDirection[i] * k;

    return mid - Math.abs(mid - (((mad % mod) + mod) % mod));
  });
}
