//https://app.codesignal.com/arcade/code-arcade/waterfall-of-integration/hqrYesGKEaKQnv7Sv

function solution(rows) {
  let copyRows = rows.slice().reverse();
  let times = copyRows[0].split("").map((_, c) => {
    let tmp = 0;
    let secs = 0;
    for (let i = 0; i < copyRows.length; i++) {
      if (copyRows[i][c] === ".") {
        tmp++;
      } else {
        secs += tmp;
        tmp = 0;
      }
    }
    return {
      col: c,
      secs: secs,
    };
  });
  return times
    .filter((c) => c.secs === Math.min(...times.map((t) => t.secs)))
    .map((c) => c.col);
}

const test = ["#..##", ".##.#", ".#.##", "....."];

console.log(solution(test));
