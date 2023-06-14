//https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript

snail = function (array) {
  let output = [];
  while (array.length) {
    output.push(...array.shift());
    array.map((row) => output.push(row.pop()));
    array.reverse().map((row) => row.reverse());
  }
  return output;
};
