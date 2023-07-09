//https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7/train/typescript

export function gooseFilter(birds: string[]): string[] {
  const geese: string[] = [
    "African",
    "Roman Tufted",
    "Toulouse",
    "Pilgrim",
    "Steinbacher",
  ];
  return birds.filter((el) => !geese.includes(el));
}
