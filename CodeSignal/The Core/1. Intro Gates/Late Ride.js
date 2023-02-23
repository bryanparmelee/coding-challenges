//https://app.codesignal.com/arcade/code-arcade/intro-gates/aiKck9MwwAKyF8D4L

function solution(n) {
    const hours = Math.floor(n/60);
    const mins = n % 60;
    const time = hours.toString() + mins.toString();   
    return time 
        .split('')
        .map(Number)
        .reduce((a,b) => a + b, 0);
}


