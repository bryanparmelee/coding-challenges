//https://app.codesignal.com/arcade/code-arcade/loop-tunnel/LbuWRHnMoJH9SAo4o

function solution(a, b, n) {
    let sum = 0
    while (n > 0) {
        sum += a * b;
        n--;
        a++
        b++;
    }
    return sum;
}

console.log(solution(1, 2, 2));