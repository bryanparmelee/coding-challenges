//https://www.codewars.com/kata/54e6533c92449cc251001667/javascript

var uniqueInOrder = function (iterable) {
  return [...iterable].filter((x, i, a) => x !== a[i + 1]);
};
