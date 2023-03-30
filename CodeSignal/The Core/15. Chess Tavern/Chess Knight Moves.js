//https://app.codesignal.com/arcade/code-arcade/chess-tavern/zqDuSLMHhAknqnLtA

function solution(cell) {
  const x = cell.charCodeAt(0) - 96;
  const y = Number(cell[1]);
  let moves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  const filtered = moves.filter((el) => {
    return x + el[0] > 0 && y + el[1] > 0 && x + el[0] < 9 && y + el[1] < 9;
  });
  return filtered.length;
}
