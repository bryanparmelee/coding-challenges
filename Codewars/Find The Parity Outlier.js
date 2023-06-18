//https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript

function findOutlier(integers) {
  oddOrEvens = integers.map((el) => (el % 2 === 0 ? 0 : 1));
  if (oddOrEvens.indexOf(1) !== oddOrEvens.lastIndexOf(1)) {
    return integers[oddOrEvens.indexOf(0)];
  }
  return integers[oddOrEvens.indexOf(1)];
}

function findOutlier2(int) {
  var even = int.filter((a) => a % 2 == 0);
  var odd = int.filter((a) => a % 2 !== 0);
  return even.length == 1 ? even[0] : odd[0];
}

function findOutlier3(integers) {
  return integers.slice(0, 3).filter(even).length >= 2
    ? integers.find(odd)
    : integers.find(even);
}
function even(num) {
  return num % 2 == 0;
}
function odd(num) {
  return !even(num);
}
