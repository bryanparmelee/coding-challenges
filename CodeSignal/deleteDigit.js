//https://app.codesignal.com/arcade/intro/level-11/vpfeqDwGZSzYNm2uX

function solution(n) {
    let max = 0;
    let str = n.toString();
    for (let i = 0; i < str.length; i++) {
        const num = Number(str.slice(0, i) + str.slice(i + 1));
        if (num > max) {
            max = num;
        }
    }
    return max;
}