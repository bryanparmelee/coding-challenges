//https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/javascript

var countSheep = function (num) {
  let output = "";
  for (let i = 1; i <= num; i++) {
    output += `${i} sheep...`;
  }
  return output;
};
