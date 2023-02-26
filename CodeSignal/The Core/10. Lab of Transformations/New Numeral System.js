//https://app.codesignal.com/arcade/code-arcade/lab-of-transformations/ngQTG9kra7GE9pnnK

function solution(number) {
  let output = [];
  const realNum = number.charCodeAt() - 65;
  for (let i = 0; Math.floor(i <= realNum / 2); i++) {
    let str = "";
    str += toLetter(i) + " + " + toLetter(realNum - i);
    output.push(str);
  }
  return output;
}

function toLetter(num) {
  return String.fromCharCode(num + 65);
}
