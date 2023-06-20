//https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/javascript

function duplicateCount(text) {
  text = text.toLowerCase();
  let dupes = new Set();
  for (let ch of text) {
    if (text.indexOf(ch) !== text.lastIndexOf(ch)) {
      dupes.add(ch);
    }
  }
  return dupes.size;
}

function duplicateCount2(text) {
  return text
    .toLowerCase()
    .split("")
    .filter((val, i, arr) => {
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
}
