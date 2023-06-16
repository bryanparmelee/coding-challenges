//https://www.codewars.com/kata/5299413901337c637e000004/train/javascript

function getMissingElement(superImportantArray) {
  return 45 - superImportantArray.reduce((a, b) => a + b, 0);
}

function getMissingElement2(superImportantArray) {
  return superImportantArray.reduce(function (sum, value) {
    return sum - value;
  }, 45);
}
