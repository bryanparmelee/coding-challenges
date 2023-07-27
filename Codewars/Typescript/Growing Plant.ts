//https://www.codewars.com/kata/58941fec8afa3618c9000184/train/typescript

export function growingPlant(up: number, down: number, h: number): number {
  let days: number = 1;
  let currHeight = up;
  while (currHeight < h) {
    currHeight += up - down;
    days++;
  }
  return days;
}
