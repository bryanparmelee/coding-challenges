//https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript

function findShort(s) {
  let arr = s.split(" ").map((word) => word.length);
  return Math.min(...arr);
}

function findShort2(s) {
  return Math.min(...s.split(" ").map((s) => s.length));
}
