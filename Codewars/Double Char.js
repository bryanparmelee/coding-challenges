//https://www.codewars.com/kata/56b1f01c247c01db92000076/javascript

function doubleChar(str) {
  return str
    .split("")
    .map((ch) => ch + ch)
    .join("");
}
