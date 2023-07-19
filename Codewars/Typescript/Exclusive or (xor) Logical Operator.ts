//https://www.codewars.com/kata/56fa3c5ce4d45d2a52001b3c/typescript

export const xor = (a: boolean, b: boolean): boolean => {
  return (a === true && b === false) || (a === false && b === true);
};

export const xor2 = (a: boolean, b: boolean): boolean => {
  return a !== b;
};
