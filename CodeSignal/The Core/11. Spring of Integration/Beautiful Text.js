//https://app.codesignal.com/arcade/code-arcade/spring-of-integration/PSeEALZTxd93zBHS7

function solution(inputString, l, r) {
  for (let i = l; i <= r; i++) {
    let regex = new RegExp("^(.{" + i + "}\\s)+.{" + i + "}$");
    if (regex.test(inputString)) return true;
  }
  return false;
}
