//https://app.codesignal.com/arcade/intro/level-4/xYXfzQmnhBvEKJwXP

const solution = (a, b) => {
  if (a.join("") === b.join("")) {
    return true;
  }
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      arr1.push(a[i]);
      arr2.push(b[i]);
    }
  }
  arr2 = arr2.reverse().join("");
  arr1 = arr1.join("");
  return arr1 === arr2;
};
