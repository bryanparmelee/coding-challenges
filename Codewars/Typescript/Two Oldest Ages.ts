//https://www.codewars.com/kata/511f11d355fe575d2c000001/typescript

export function twoOldestAges(ages: number[]): number[] {
  let max: number = Math.max(...ages);
  ages.splice(ages.indexOf(max), 1);
  let second: number = Math.max(...ages);
  return [second, max];
}

export function twoOldestAges2(ages: number[]): number[] {
  return ages.sort((a, b) => a - b).slice(ages.length - 2);
}
