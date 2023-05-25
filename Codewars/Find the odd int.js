//https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

function findOdd(arr) {
  for (let i = 0; i < arr.length; i++) {
    const count = arr.filter((value) => value === arr[i]).length;
    if (count % 2 == 1) {
      return arr[i];
    }
  }
  return -1;
}

function findOdd2(A) {
  var obj = {};
  A.forEach(function (el) {
    obj[el] ? obj[el]++ : (obj[el] = 1);
  });

  for (prop in obj) {
    if (obj[prop] % 2 !== 0) return Number(prop);
  }
}
