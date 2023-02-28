//https://app.codesignal.com/arcade/code-arcade/lab-of-transformations/dB9drnfWzpiWznESA

function solution(cipher) {
  let output = "";
  let ch = "";
  for (let i = 0; i < cipher.length; i++) {
    ch += cipher[i];
    if (ch >= 97 && ch <= 122) {
      output += String.fromCharCode(Number(ch));
      ch = "";
    }
  }
  return output;
}
