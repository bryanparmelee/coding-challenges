//https://app.codesignal.com/arcade/code-arcade/at-the-crossroads/aFF9HDm2Rsti9j5kc

// while a is not equal to b do
//   increase a by 1
//   decrease b by 1

function solution(a, b) {
    return a > b ? true : (b - a) % 2 !== 0 ? true : false;
}
