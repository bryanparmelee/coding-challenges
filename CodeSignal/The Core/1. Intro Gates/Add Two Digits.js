//https://app.codesignal.com/arcade/code-arcade/intro-gates/wAGdN6FMPkx7WBq66

function solution(n) {
    return n
        .toString()
        .split('')
        .map(el => Number(el))
        .reduce((a,b) => a + b);
}