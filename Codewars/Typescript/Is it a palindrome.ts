//https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/typescript

export function isPalindrome(x: string): boolean {
  return x.toLowerCase() === x.split("").reverse().join("").toLowerCase();
}
