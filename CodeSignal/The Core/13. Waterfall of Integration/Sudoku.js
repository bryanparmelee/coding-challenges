//https://app.codesignal.com/arcade/code-arcade/waterfall-of-integration/tQgasP8b62JBeirMS

function solution(grid) {
  function nineCheck(arr) {
    let check = true;
    for (let i = 1; i <= 9; i++) {
      if (!arr.includes(i)) {
        check = false;
        break;
      }
    }
    return check;
  }

  const rowCheck = grid.map((row) => nineCheck(row));

  let cols = [];
  for (let y = 0; y < grid.length; y++) {
    let col = [];
    for (let x = 0; x < grid[0].length; x++) {
      col.push(grid[x][y]);
    }
    cols.push(col);
  }

  const colCheck = cols.map((col) => nineCheck(col));

  let grids = [];

  const grid1 = grid
    .slice(0, 3)
    .map((i) => i.slice(0, 3))
    .flat();
  const grid2 = grid
    .slice(3, 6)
    .map((i) => i.slice(0, 3))
    .flat();
  const grid3 = grid
    .slice(6)
    .map((i) => i.slice(0, 3))
    .flat();
  const grid4 = grid
    .slice(0, 3)
    .map((i) => i.slice(3, 6))
    .flat();
  const grid5 = grid
    .slice(3, 6)
    .map((i) => i.slice(3, 6))
    .flat();
  const grid6 = grid
    .slice(6)
    .map((i) => i.slice(3, 6))
    .flat();
  const grid7 = grid
    .slice(0, 3)
    .map((i) => i.slice(6))
    .flat();
  const grid8 = grid
    .slice(3, 6)
    .map((i) => i.slice(6))
    .flat();
  const grid9 = grid
    .slice(6)
    .map((i) => i.slice(6))
    .flat();

  grids.push(grid1, grid2, grid3, grid4, grid5, grid6, grid7, grid8, grid9);

  const gridsCheck = grids.map((g) => nineCheck(g));

  function truthCheck(arr) {
    return arr.includes(false) ? false : true;
  }

  return truthCheck(rowCheck) && truthCheck(colCheck) && truthCheck(gridsCheck);
}
