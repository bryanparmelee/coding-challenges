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