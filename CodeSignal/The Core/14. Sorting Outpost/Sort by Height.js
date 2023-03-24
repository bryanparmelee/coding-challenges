//https://app.codesignal.com/arcade/code-arcade/sorting-outpost/D6qmdBL2NYz49XHwM

function solution(a) {
  let b = [...a];
  b = b.filter((x) => x !== -1).sort((a, b) => a - b);
  a.map((num, i) => {
    if (num === -1) {
      b.splice(i, 0, num);
    }
  });
  return b;
}
