//https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference

function sym(...args) {
  return [...new Set(args.reduce(findDiff))];
}

function findDiff(arr1, arr2) {
  return [
    ...arr1.filter((el) => !arr2.includes(el)),
    ...arr2.filter((el) => !arr1.includes(el)),
  ];
}
