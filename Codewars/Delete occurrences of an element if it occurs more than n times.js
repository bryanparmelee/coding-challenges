//https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript

function deleteNth(arr, n) {
  let counts = {};
  return arr.filter((num) => {
    counts[num] = (counts[num] || 0) + 1;
    return counts[num] <= n;
  });
}
