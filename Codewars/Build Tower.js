//https://www.codewars.com/kata/576757b1df89ecf5bd00073b/javascript

function towerBuilder(nFloors) {
  let w = nFloors + (nFloors - 1);
  let output = [];
  let pad = 0;
  for (let i = 0; i < nFloors; i++) {
    output.unshift(" ".repeat(pad) + "*".repeat(w) + " ".repeat(pad));
    pad++;
    w = w - 2;
  }
  return output;
}
