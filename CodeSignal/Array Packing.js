//https://app.codesignal.com/arcade/code-arcade/corner-of-0s-and-1s/KeMqde6oqfF5wBXxf

function solution(a) {
    const pack = a.map(el => {
        let bi = el.toString(2);
        let n = 8 - bi.length;
        return "0".repeat(n) + bi;
    });
    return parseInt(pack.reverse().join(''), 2);    
}
