//https://www.codewars.com/kata/56269eb78ad2e4ced1000013/javascript

function findNextSquare(sq) {
  let sRoot = Math.sqrt(sq);
  return sRoot - Math.floor(sRoot) !== 0 ? -1 : Math.pow(sRoot + 1, 2);
}
