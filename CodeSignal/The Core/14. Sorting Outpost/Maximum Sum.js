//https://app.codesignal.com/arcade/code-arcade/sorting-outpost/64koZSDqndwYxFZj6

function solution(a, q) {
  a.sort((x, y) => x - y);
  let counts = new Array(a.length).fill(0);

  for (let tuple of q) {
    for (let i = tuple[0]; i <= tuple[1]; i++) {
      counts[i]++;
    }
  }
  counts.sort((x, y) => x - y);

  return a.reduce((sum, x, i) => {
    return sum + x * counts[i];
  }, 0);
}
