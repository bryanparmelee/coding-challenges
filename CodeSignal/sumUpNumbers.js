//https://app.codesignal.com/arcade/intro/level-12/YqZwMJguZBY7Hz84T

function solution(inputString) {
    const numbers = inputString.match(/\d+/g);
    console.log(numbers);
    if (numbers === null) {
        return 0;
    } else {
        return numbers.reduce((a, b) => Number(a) + Number(b), 0);
    }
}

