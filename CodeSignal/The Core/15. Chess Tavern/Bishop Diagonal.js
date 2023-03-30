//https://app.codesignal.com/arcade/code-arcade/chess-tavern/wGLCfzpdcA2o9kSpD

function solution(b1, b2) {
  if (
    Math.abs(b1.charCodeAt(0) - b2.charCodeAt(0)) ===
    Math.abs(Number(b1[1]) - Number(b2[1]))
  ) {
    let output = [];
    let arr = [b1, b2].sort();
    let a = arr[0].charCodeAt(0),
      b = arr[0][1],
      c = arr[1].charCodeAt(0),
      d = arr[1][1];
    if (b > d) {
      while (a > 97 && b < 8) {
        a--;
        b++;
      }
      output.push(String.fromCharCode(a) + b);
      while (c < 104 && d > 1) {
        c++;
        d--;
      }
      output.push(String.fromCharCode(c) + d);
      return output;
    } else {
      while (a > 97 && b > 1) {
        a--;
        b--;
      }
      output.push(String.fromCharCode(a) + b);
      while (c < 104 && d < 8) {
        c++;
        d++;
      }
      output.push(String.fromCharCode(c) + d);
      return output;
    }
  }
  return [b1, b2].sort();
}
