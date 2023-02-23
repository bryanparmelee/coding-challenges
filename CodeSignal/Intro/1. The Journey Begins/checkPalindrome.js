function solution(inputString) {
  let rev = inputString.split("").reverse().join("");
  if (rev === inputString) {
    return true;
  } else {
    return false;
  }
}
