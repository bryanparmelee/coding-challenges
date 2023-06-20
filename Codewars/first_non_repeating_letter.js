//https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript

function firstNonRepeatingLetter(s) {
  let str = s.toLowerCase();
  for (let ch of s) {
    if (str.indexOf(ch.toLowerCase()) === str.lastIndexOf(ch.toLowerCase())) {
      return ch;
    }
  }
  return "";
}

function firstNonRepeatingLetter2(s) {
  for (var i in s) {
    if (s.match(new RegExp(s[i], "gi")).length === 1) {
      return s[i];
    }
  }
  return "";
}
