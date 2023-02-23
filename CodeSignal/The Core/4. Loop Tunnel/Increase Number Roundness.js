//https://app.codesignal.com/arcade/code-arcade/loop-tunnel/KLbRMcWhaZi3dvYH5

function solution(n) {
    let trailing = 1;
    let str = n.toString();
    for (let i = str.length - 1; i > 0; i--) {
        if (str[i] !== '0') {
            trailing += i;
            break;
        }
    }
    let preceeding = str.substring(0, trailing);
    return preceeding.includes('0');
}

function solution2(n) {
    return /0[1-9]/.test(n);
}