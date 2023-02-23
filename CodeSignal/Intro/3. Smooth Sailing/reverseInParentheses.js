function solution(s) {
  if (s.includes("(")) {
    return solution(reverseOnce(s));
  } else {
    return s;
  }
}

function reverseOnce(s) {
  var regexp = /\(([^()]*)\)/i;
  var subStr = regexp.exec(s)[1];
  subStr = subStr.split("").reverse().join("");
  return s.replace(regexp, subStr);
}
