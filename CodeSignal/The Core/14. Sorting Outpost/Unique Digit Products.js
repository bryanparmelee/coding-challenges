//https://app.codesignal.com/arcade/code-arcade/sorting-outpost/oY6FASrCMEqkxwcAC

function solution(a) {
  let products = a.map((el) => {
    return el
      .toString()
      .split("")
      .map(Number)
      .reduce((a, b) => a * b);
  });
  const pSet = new Set(products);
  return pSet.size;
}
