//https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript

function isIsogram(str) {
  str = str.toLowerCase();
  for (let ch of str) {
    if (str.indexOf(ch) !== str.lastIndexOf(ch)) return false;
  }
  return true;
}

function isIsogram2(str) {
  return new Set(str.toUpperCase()).size == str.length;
}
