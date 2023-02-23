function solution(a) {
  let odds = 0;
  let evens = 0;
  let sums = [];
  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      odds += a[i];
    } else {
      evens += a[i];
    }
  }
  sums.push(odds, evens);
  return sums;
}
