//https://www.codewars.com/kata/5552101f47fc5178b1000050/javascript

function digPow(n, p) {
  let nArr = n.toString().split("").map(Number);
  let pows = nArr.map((num, i) => {
    return Math.pow(num, p + i);
  });
  let sum = pows.reduce((a, b) => a + b, 0);
  return sum % n === 0 ? sum / n : -1;
}

function digPow2(n, p) {
  var x = String(n)
    .split("")
    .reduce((s, d, i) => s + Math.pow(d, p + i), 0);
  return x % n ? -1 : x / n;
}
