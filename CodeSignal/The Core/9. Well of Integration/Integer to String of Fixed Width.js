//https://app.codesignal.com/arcade/code-arcade/well-of-integration/kvGfZZxGyjNbD7yxv

function solution(number, width) {
  let str = number.toString();
  if (str.length > width) {
    return str.slice(str.length - width);
  } else if (str.length < width) {
    return str.padStart(width, "0");
  } else {
    return str;
  }
}

function solution2(number, width) {
  return `${number}`.padStart(width, "0").slice(-width);
}
