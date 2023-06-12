//https://www.codewars.com/kata/57f609022f4d534f05000024/javascript

function stray(numbers) {
  return numbers.filter(
    (e) => numbers.indexOf(e) === numbers.lastIndexOf(e)
  )[0];
}

const stray2 = (nums) => nums.reduce((a, b) => a ^ b);
