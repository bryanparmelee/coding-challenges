//https://app.codesignal.com/arcade/code-arcade/book-market/2SDWWyHY9Xw5CpphY

function solution(inputString) {
    if (inputString.length % 2 !== 0) {
        return false;
    } else {
        let half = inputString.length / 2;
        return inputString.slice(0, half) === inputString.slice(half);
    }
}