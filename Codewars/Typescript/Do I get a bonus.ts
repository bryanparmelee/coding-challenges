//https://www.codewars.com/kata/56f6ad906b88de513f000d96/train/typescript

export class Kata {
  public static bonusTime(salary: number, bonus: boolean): string {
    if (bonus) salary *= 10;
    return `\u00A3${salary}`;
  }
}
