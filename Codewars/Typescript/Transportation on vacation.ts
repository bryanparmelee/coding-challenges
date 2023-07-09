//https://www.codewars.com/kata/568d0dd208ee69389d000016/train/typescript

export function rentalCarCost(d: number): number {
  let total: number = d * 40;
  total -= d >= 7 ? 50 : d >= 3 ? 20 : 0;
  return total;
}
