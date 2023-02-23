function solution(a) {
  var b = a;
  b = b
    .filter((x) => {
      if (x != -1) {
        return x;
      }
    })
    .sort((a, b) => a - b);
  let index = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] != -1) {
      a[i] = b[index];
      index++;
    }
  }
  return a;
}
