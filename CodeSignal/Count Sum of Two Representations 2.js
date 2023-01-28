//https://app.codesignal.com/arcade/code-arcade/loop-tunnel/hBw5BJiZ4LmXcy92u

function solution(n, l, r) {
    let count = 0;
    let A = n - r < l ? l : n - r;
    let B = n - l > r ? r : n - l;
  
    while (A + B === n && A <= B ) {
        count++;
        A++;
        B--;    
    }
    return count;
}
