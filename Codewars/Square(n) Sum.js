//https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript

function squareSum(numbers) {
  return numbers.map((n) => n * n).reduce((a, b) => a + b, 0);
}

function squareSum2(numbers) {
  return numbers.reduce((sum, num) => sum + num * num, 0);
}
