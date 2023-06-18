//https://www.codewars.com/kata/54557d61126a00423b000a45/train/javascript

function shorter_reverse_longer(a, b) {
  return a.length < b.length
    ? a + b.split("").reverse().join("") + a
    : b + a.split("").reverse().join("") + b;
}
