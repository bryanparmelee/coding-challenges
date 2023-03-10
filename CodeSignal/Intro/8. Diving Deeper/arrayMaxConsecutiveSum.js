//https://app.codesignal.com/arcade/intro/level-8/Rqvw3daffNE7sT7d5

function solution(inputArray, k) {
    let sum = inputArray.slice(0, k).reduce((a, b) => a + b);
    let max = sum;
    for (let i = 0; i < inputArray.length - k; i++) {
        sum += inputArray[i + k] - inputArray[i];
        if (sum > max) {
            max = sum;
        }
    }
    return max;
}