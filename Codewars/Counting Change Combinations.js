//https://www.codewars.com/kata/541af676b589989aed0009e7/train/javascript

function countChange(money, coins) {
  if (money < 0 || coins.length === 0) {
    return 0;
  }
  if (money === 0) {
    return 1;
  }
  return (
    countChange(money - coins[0], coins) + countChange(money, coins.slice(1))
  );
}

console.log(countChange(300, [5, 10, 20, 50, 100, 200, 500]));
