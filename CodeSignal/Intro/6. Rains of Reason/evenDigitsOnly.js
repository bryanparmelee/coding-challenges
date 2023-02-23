//https://app.codesignal.com/arcade/intro/level-6/6cmcmszJQr6GQzRwW

function solution(n) {
    const arr = n.toString().split('');
    arr.map(el => Number(el));
    return arr.every(el => el % 2 === 0);
}
