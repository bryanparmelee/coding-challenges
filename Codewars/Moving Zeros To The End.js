//https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

function moveZeros(arr) {
  for (let i = arr.length; i >= 0; i--) {
    if (arr[i] === 0) {
      arr.push(arr[i]);
      arr.splice(i, 1);
    }
  }
  return arr;
}
