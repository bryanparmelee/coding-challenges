//https://app.codesignal.com/arcade/code-arcade/lab-of-transformations/vsKRjYKv4SCjzJc8r

function solution(ver1, ver2) {
  let arr1 = ver1.split(".").map(Number);
  let arr2 = ver2.split(".").map(Number);
  let i = 0;
  while (i < arr1.length && arr1[i] === arr2[i]) {
    i++;
  }
  return arr1[i] > arr2[i];
}
