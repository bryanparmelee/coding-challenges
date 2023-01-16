//https://app.codesignal.com/arcade/intro/level-12/NJJhENpgheFRQbPRA

function solution(product) {
    for (let i = 1; i < 5000; i++) {
        if (products(i) === product)return i;
    }
        function products (num) {
            return String(num)
                .split('')
                .map(Number)
                .reduce((a, b) => a*b, 1);
        }
        return -1;
}