//https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript

function getSum(a, b) {
  if (a === b) return a;
  let sum = 0;
  let x = Math.min(a, b);
  let y = Math.max(a, b);
  while (x <= y) {
    sum += x;
    x++;
  }
  return sum;
}

const GetSum = (a, b) => {
  let min = Math.min(a, b),
    max = Math.max(a, b);
  return ((max - min + 1) * (min + max)) / 2;
};
