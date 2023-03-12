//https://app.codesignal.com/arcade/code-arcade/waterfall-of-integration/5xPitc3yT3dqS7XkP

function solution(image) {
  let output = [];
  for (let y = 0; y < image.length - 2; y++) {
    let yAvgs = [];
    for (let x = 0; x < image[y].length - 2; x++) {
      let sum = 0;
      for (let a = y; a < y + 3; a++) {
        for (let b = x; b < x + 3; b++) {
          sum += image[a][b];
        }
      }
      yAvgs.push(Math.floor(sum / 9));
    }
    output.push(yAvgs);
  }
  return output;
}
