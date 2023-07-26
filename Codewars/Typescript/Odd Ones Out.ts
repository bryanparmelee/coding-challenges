//https://www.codewars.com/kata/5d376cdc9bcee7001fcb84c0/typescript

export function oddOnesOut(nums: number[]) {
  let counts = {};
  nums.map((n) => (counts[n] = counts[n] ? counts[n] + 1 : 1));
  for (let i in counts) {
    if (counts[i] % 2 !== 0) {
      nums = nums.filter((n) => n === Number(i));
    }
  }
  return nums;
}
