//https://app.codesignal.com/arcade/code-arcade/sorting-outpost/9y4wLpcqnNozn92tG

function solution(l, w, h) {
  let boxes = [];
  for (let i = 0; i < l.length; i++) {
    let box = [l[i], w[i], h[i]];
    boxes.push(box.sort((a, b) => b - a));
  }
  boxes.sort((a, b) => b[0] - a[0]);
  for (let x = 0; x < boxes[0].length; x++) {
    for (let y = 0; y < boxes.length - 1; y++) {
      if (boxes[y][x] <= boxes[y + 1][x]) {
        return false;
      }
    }
  }
  return true;
}
