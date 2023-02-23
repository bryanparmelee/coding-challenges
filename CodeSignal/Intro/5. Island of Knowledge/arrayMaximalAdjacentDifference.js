//https://app.codesignal.com/arcade/intro/level-5/EEJxjQ7oo7C5wAGjE

function solution(inputArray) {
    let diffs = [];
    for (let i = 0; i < inputArray.length -1; i++) {
        diffs.push(inputArray[i] - inputArray[i + 1]);
        diffs.push(inputArray[i + 1] - inputArray[i]);
    }
    return Math.max(...diffs);
}

