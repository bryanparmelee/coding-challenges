//https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/inventory-update

function updateInventory(arr1, arr2) {
  let names = arr1.map((item) => item[1]);
  arr2.map((item) => {
    let index = names.indexOf(item[1]);
    if (index !== -1) {
      arr1[index][0] = arr1[index][0] + item[0];
    } else {
      arr1.push(item);
    }
  });
  return arr1.sort((a, b) => (a[1] > b[1] ? 1 : -1));
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"],
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];

console.log(updateInventory(curInv, newInv));
