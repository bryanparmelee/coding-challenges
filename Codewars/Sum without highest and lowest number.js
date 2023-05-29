//https://www.codewars.com/kata/576b93db1129fcf2200001e6/javascript

function sumArray(array) {
  if (array === null || array === undefined || array.length <= 1) return 0;
  const max = Math.max(...array);
  const min = Math.min(...array);
  return array.reduce((a, b) => a + b, 0) - max - min;
}
