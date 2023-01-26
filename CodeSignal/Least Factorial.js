//https://app.codesignal.com/arcade/code-arcade/loop-tunnel/7BFPq6TpsNjzgcpXy

function solution(n) {
    let k = 1;
    for (let i = 1; k < n; i++) {
        k *= i;
    }
    return k;
}
