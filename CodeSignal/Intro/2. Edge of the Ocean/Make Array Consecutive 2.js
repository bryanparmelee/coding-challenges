function solution(statues) {
  let count = 0;
  let sorted = statues.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i + 1] - sorted[i] > 1) {
      count += sorted[i + 1] - sorted[i] - 1;
    }
  }
  return count;
}
