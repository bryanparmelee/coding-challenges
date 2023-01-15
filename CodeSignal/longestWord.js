//https://app.codesignal.com/arcade/intro/level-12/s9qvXv4yTaWg8g4ma

function solution(text) {
    const words = text.match(/[a-z]+/ig);
    return words.sort((a, b) => b.length - a.length)[0];
}

