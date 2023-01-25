//https://app.codesignal.com/arcade/code-arcade/corner-of-0s-and-1s/e3zfPNTwTa9qTQzcX

function solution(a) {
    return parseInt(a.toString(2).split('').reverse().join(''), 2);
}

console.log(solution(8));