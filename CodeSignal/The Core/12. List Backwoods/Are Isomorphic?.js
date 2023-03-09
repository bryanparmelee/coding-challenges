//https://app.codesignal.com/arcade/code-arcade/list-backwoods/xKYm98etd9JRsTcZY

function solution(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i].length !== array2[i].length) {
        return false;
      }
    }
  }
  return true;
}
