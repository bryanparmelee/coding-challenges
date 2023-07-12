//https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/typescript

export const pigIt = (a: string): string => {
  let regex = /^[A-Za-z]+$/;
  return a
    .split(" ")
    .map((el) => {
      return regex.test(el) ? el.slice(1) + el[0] + "ay" : el;
    })
    .join(" ");
};

export const pigIt2 = (a: string) => a.replace(/(\w)(\w+)*/g, "$2$1ay");
