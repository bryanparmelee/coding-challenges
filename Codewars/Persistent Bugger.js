//https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/javascript

function persistence(num) {
  let count = 0;
  while (num.toString().length !== 1) {
    count++;
    num = num
      .toString()
      .split("")
      .reduce((a, b) => a * b);
  }
  return count;
}
