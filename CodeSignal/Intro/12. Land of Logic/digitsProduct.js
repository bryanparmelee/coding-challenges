//https://app.codesignal.com/arcade/intro/level-12/NJJhENpgheFRQbPRA

function solution(product) {
    if (product === 0) return 10;
    if (product === 1) return 1;
    let output = [];
    for (let i = 9; i > 1; i--) {
        while (product % i === 0) {
            output.unshift(i);
            product /= i;
        }
    }
    return product > 1 ? -1 : Number(output.join(''));
}