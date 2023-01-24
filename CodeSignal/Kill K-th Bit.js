//https://app.codesignal.com/arcade/code-arcade/corner-of-0s-and-1s/b5z4P2r2CGCtf8HCR

function solution(n, k) {
    return parseInt(n.toString(2).split('').map((el, i, arr) => i === arr.length - k ? '0' : el).join(''), 2);
 
  }
