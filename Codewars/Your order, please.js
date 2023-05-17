//https://www.codewars.com/kata/55c45be3b2079eccff00010f/javascript

function order(words) {
  let output = "";
  let nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let arr = words.split(" ");
  if (!arr.length) return words;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j].includes(nums[i])) {
        output += arr[j];
      }
    }
    if (i < arr.length - 1) {
      output += " ";
    }
  }
  return output;
}

//alternate solution

function order2(words) {
  return words
    .split(" ")
    .sort((a, b) => {
      return a.match(/\d/) - b.match(/\d/);
    })
    .join(" ");
}
