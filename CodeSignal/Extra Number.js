//https://app.codesignal.com/arcade/code-arcade/at-the-crossroads/sgDWKCFQHHi5D3Szj

function solution(a, b, c) {
    const arr = [a, b, c];
    return arr.filter(x => {
        return arr.indexOf(x) === arr.lastIndexOf(x);
    })[0];    
}