//https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript

function narcissistic(value) {
  let arr = value.toString().split("").map(Number);
  let e = arr.length;
  return arr.reduce((a, b) => a + Math.pow(b, e), 0) === value;
}
