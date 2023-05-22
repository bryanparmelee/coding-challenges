//https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

function getCount(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let strArr = str.split("");
  strArr = strArr.filter((el) => vowels.indexOf(el) !== -1);
  return strArr.length;
}

function getCount2(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

function getCount3(str) {
  return str.split("").filter((c) => "aeiouAEIOU".includes(c)).length;
}
