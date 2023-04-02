//https://app.codesignal.com/arcade/code-arcade/chess-tavern/SJRNgqggTaktuCJGj

function solution(p) {
  const alpha = "abcdefgh";
  let pos = [];
  p.split(";").map((el) => {
    pos.push(alpha.indexOf(el[0]) + 1, Number(el[1]));
  });
  return pos.reduce((a, b) => a + b, 0) % 2 === 0;
}
