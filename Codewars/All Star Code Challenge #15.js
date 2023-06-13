//https://www.codewars.com/kata/586560a639c5ab3a260000f3

function rotate(str) {
  let output = [];
  for (let i = 1; i <= str.length; i++) {
    output.push(str.slice(i) + str.slice(0, i));
  }
  return output;
}

function rotate2(s) {
  return s.split("").map((e) => (s = s.slice(1) + s.slice(0, 1)));
}
