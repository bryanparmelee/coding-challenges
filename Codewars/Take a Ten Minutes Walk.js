//https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript

function isValidWalk(walk) {
  let n = walk.filter((x) => x === "n");
  let s = walk.filter((x) => x === "s");
  let e = walk.filter((x) => x === "e");
  let w = walk.filter((x) => x === "w");
  return walk.length === 10 && n.length === s.length && e.length === w.length;
}
