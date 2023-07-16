//https://www.codewars.com/kata/5a39724945ddce2223000800/train/typescript

export function totalAmountVisible(topNum: number, numOfSides: number): number {
  let totalDots: number = 0;
  for (let i = numOfSides; i > 0; i--) {
    totalDots += i;
  }
  return totalDots - (numOfSides + 1 - topNum);
}

export function totalAmountVisible2(
  topNum: number,
  numOfSides: number
): number {
  return (numOfSides * (numOfSides + 1)) / 2 - (numOfSides - topNum + 1);
}
