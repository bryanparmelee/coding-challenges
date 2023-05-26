//https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript

function longest(s1, s2) {
  let set = new Set(s1 + s2);
  let arr = [];
  for (let n of set) {
    arr.push(n);
  }
  return arr.sort().join("");
}

const longest2 = (s1, s2) => [...new Set(s1 + s2)].sort().join("");
