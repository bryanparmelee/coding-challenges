//https://app.codesignal.com/arcade/code-arcade/corner-of-0s-and-1s/eC2Zxu5H5SnuKxvPT

function solution(a, b) {
    let str = '';
    let i = a;
    while (i <= b) {
        str += i.toString(2);
        i++;
    }
    return str.replace(/0/g, '').length;    
}
