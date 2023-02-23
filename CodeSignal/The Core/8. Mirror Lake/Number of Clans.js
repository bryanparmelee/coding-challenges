//https://app.codesignal.com/arcade/code-arcade/mirror-lake/BLbGNY3kEcvKjBCFC

function solution(divisors, k) {
  let allClans = [];
  for (let i = 1; i <= k; i++) {
    let clans = "";
    divisors.map((el, idx) => {
      if (i % el === 0) {
        clans += idx.toString();
      }
    });
    allClans.push(clans);
  }
  const set = new Set(allClans);
  return set.size;
}
