//https://app.codesignal.com/arcade/code-arcade/loop-tunnel/scG8AFsPuqQGx8Qjf

function solution(k) {
    let yellow = 0; 
    let red = 0; 
    let oddCount = 1;
    let evenCount = 2;
    while (oddCount <= k) {
        yellow += oddCount ** 2;
        oddCount += 2;
    }
    while (evenCount <=k) {
        red += evenCount ** 2;
        evenCount += 2;
    }
    return red - yellow;
}