//https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript

var maxSequence = function (arr) {
  let currentSum = 0;
  let maxSum = 0;

  if (arr.length === 0) {
    return 0;
  }

  arr.forEach((a) => {
    currentSum = Math.max(a, currentSum + a);
    maxSum = Math.max(maxSum, currentSum);
  });
  return maxSum;
};

var maxSequence2 = function (arr) {
  var currentSum = 0;
  return arr.reduce(function (maxSum, number) {
    currentSum = Math.max(currentSum + number, 0);
    return Math.max(currentSum, maxSum);
  }, 0);
};
