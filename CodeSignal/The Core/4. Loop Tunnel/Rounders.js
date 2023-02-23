//https://app.codesignal.com/arcade/code-arcade/loop-tunnel/H5PP5MXvYvWXxTytH

function solution(n) {
    let arr = n.toString().split('').reverse().map(Number);
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] >= 5) {
            arr[i] = 0;
            arr[i+1] += 1;
        } else {
            arr[i] = 0;
        }
    }
    return Number(arr.reverse().join(''));
}