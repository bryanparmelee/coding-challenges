//https://www.codewars.com/kata/525fbff0594da0665c0003a3/train/javascript

function nextGen(cells) {
  let output = [];
  for (let y = 0; y < cells.length; y++) {
    let row = [];
    for (let x = 0; x < cells[0].length; x++) {
      let sum = findNeighbors(cells, y, x);
      if ((cells[y][x] && sum < 2) || (cells[y][x] && sum > 3)) {
        row.push(0);
      } else if (!cells[y][x] && sum === 3) {
        row.push(1);
      } else {
        row.push(cells[y][x]);
      }
    }
    output.push(row);
  }

  return output;
}

function findNeighbors(arr, a, b) {
  let sum = 0;
  const neighbors = [
    [1, 0],
    [1, 1],
    [0, 1],
    [-1, 1],
    [-1, 0],
    [-1, -1],
    [0, -1],
    [1, -1],
  ];
  neighbors.map((el) => {
    let [x, y] = el;
    if (arr[x + a] !== undefined && arr[x + a][y + b] !== undefined) {
      sum += arr[x + a][y + b];
    }
  });
  return sum;
}
