function solution(inputArray) {
  let x = inputArray;
  let y = inputArray
    .map((e) => {
      return e.length;
    })
    .sort((a, b) => b - a)[0];
  return x.filter((b) => {
    if (b.length === y) return b;
  });
}
