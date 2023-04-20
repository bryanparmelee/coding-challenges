//https://app.codesignal.com/arcade/code-arcade/regular-hell/Rqtm4Yv8GhHYXJYPY

function solution(s, n) {
  var re = new RegExp("(([1-9]+[0-9]*).*?){" + n + "}");
  return re.exec(s)[1];
}
