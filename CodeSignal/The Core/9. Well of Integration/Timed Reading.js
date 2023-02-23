//https://app.codesignal.com/arcade/code-arcade/well-of-integration/mJr7vgtN4X4ecL7ZA

function solution(maxLength, text) {
  let words = text.match(/\w+/gi);
  if (!words) {
    return 0;
  } else {
    let read = words.filter((el) => el.length <= maxLength);
    return read.length;
  }
}
