//https://app.codesignal.com/arcade/code-arcade/well-of-integration/sGwCfM5FzX7LhLcdk

function solution(coins, price) {
  let coinsUsed = 0;
  let total = 0;
  for (let i = coins.length - 1; i >= 0; i--) {
    while (total + coins[i] <= price) {
      if (total === price) {
        break;
      } else {
        total += coins[i];
        coinsUsed++;
      }
    }
  }
  return coinsUsed;
}
