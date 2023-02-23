//https://app.codesignal.com/arcade/intro/level-5/XC9Q2DhRRKQrfLhb5

function solution(inputArray) {
    let max = Math.max(...inputArray);
    for (let i = 1; i < max; i++) {
        const obstacles = inputArray.some(x => x % i === 0)
        if(!obstacles) return i;
    }
    return max + 1;
}