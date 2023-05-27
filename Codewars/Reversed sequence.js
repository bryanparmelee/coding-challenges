//https://www.codewars.com/kata/5390bac347d09b7da40006f6/javascript

const reverseSeq = (n) => {
  let output = [];
  while (n > 0) {
    output.push(n);
    n--;
  }
  return output;
};
