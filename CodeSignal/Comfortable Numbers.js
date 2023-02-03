//https://app.codesignal.com/arcade/code-arcade/labyrinth-of-nested-loops/pNfGgNk46YZ4c4RW5

function solution(l, r) {
    const s = (num) => num.toString().split('').map(Number).reduce((a, b) => a + b, 0);

    let pairs = 0;

    for (let i = l; i <= r; i++) {
        for (let j = i + 1; j <= r; j++) {
            let a = s(i);
            let b = s(j);
            if (j >= i - a && j <= i + a && i >= j - b && i <= j + b) {
                pairs++;
            }
        }
    }
    return pairs;

}
