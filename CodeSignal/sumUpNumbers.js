//https://app.codesignal.com/arcade/intro/level-12/YqZwMJguZBY7Hz84T

function solution(inputString) {
    const numbers = inputString.match(/\d+/g);
    return numbers === null ? 0 :
    numbers.reduce((a, b) => Number(a) + Number(b), 0);    
}

