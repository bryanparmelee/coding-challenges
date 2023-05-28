//https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript

function findAverage(array) {
  if (!array.length) return 0;
  return array.reduce((a, b) => a + b, 0) / array.length;
}
