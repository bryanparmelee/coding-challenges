//https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript

function SeriesSum(n) {
  if (n === 0) return "0.00";
  if (n === 1) return "1.00";
  let sum = 1;
  let divisor = 4;
  while (n > 1) {
    sum += 1 / divisor;
    n--;
    divisor += 3;
  }
  return sum.toFixed(2).toString();
}

function SeriesSum2(n) {
  for (let s = 0, i = 0; i < n; i++) {
    s += 1 / (1 + i * 3);
  }

  return s.toFixed(2);
}
