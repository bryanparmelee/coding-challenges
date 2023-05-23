//https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript

function createPhoneNumber(numbers) {
  const [a, b, c, d, e, f, g, h, i, j] = numbers.map((n) => n.toString());
  return `(${a}${b}${c}) ${d}${e}${f}-${g}${h}${i}${j}`;
}

function createPhoneNumber2(numbers) {
  var format = "(xxx) xxx-xxxx";

  for (var i = 0; i < numbers.length; i++) {
    format = format.replace("x", numbers[i]);
  }

  return format;
}
