//https://app.codesignal.com/arcade/code-arcade/lab-of-transformations/8nAgfjhDvKCpxwGWF

function solution(inputString) {
  let output = "";
  for (ch of inputString) {
    let code = ch.charCodeAt();
    output += String.fromCharCode(219 - code);
  }
  return output;
}
