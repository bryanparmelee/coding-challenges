//https://app.codesignal.com/arcade/code-arcade/book-market/G9wj2j6zaWwFWsise

function solution(inputString) {
    const reversed = inputString
        .split('')
        .reverse()
        .join('')
    return reversed.toLowerCase() === inputString.toLowerCase();
}
