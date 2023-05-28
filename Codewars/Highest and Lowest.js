//https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

function highAndLow(numbers) {
  const arr = numbers.split(" ").map(Number);
  console.log(arr);
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return `${max} ${min}`;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
