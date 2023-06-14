//https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/javascript

function openOrSenior(data) {
  let output = [];
  data.map((pair) =>
    pair[0] >= 55 && pair[1] > 7 ? output.push("Senior") : output.push("Open")
  );
  return output;
}

function openOrSenior2(data) {
  return data.map(([age, handicap]) =>
    age > 54 && handicap > 7 ? "Senior" : "Open"
  );
}
