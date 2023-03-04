//https://app.codesignal.com/arcade/code-arcade/spring-of-integration/6QDtjNr3WoL5W4Kvo

function solution(inputArray, result) {
  let pairs = 0;
  for (let i = 0; i < inputArray.length - 1; i++) {
    for (let j = i + 1; j < inputArray.length; j++) {
      if (compare(inputArray[i], inputArray[j], result)) {
        pairs++;
      }
    }
  }
  return pairs;
}

function compare(s1, s2, s3) {
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s3[i] && s2[i] !== s3[i]) {
      return false;
    }
  }
  return true;
}
