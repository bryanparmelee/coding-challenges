//https://app.codesignal.com/arcade/code-arcade/loop-tunnel/RcK4vupi8sFhakjnh

function solution(n, m) {
    return n + m + gcd(n, m) - 2;
}

function gcd(a, b) {
    if (!b) {
        return a;
    }
    return gcd(b, a % b);
}
