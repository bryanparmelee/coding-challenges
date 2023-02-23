//https://app.codesignal.com/arcade/code-arcade/labyrinth-of-nested-loops/yBFfNv5fTqhcacZ7w

function solution(n) {
    if (n === 1) {
        return true;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        let b = i * i;
        while (b <= n) {
            if (b === n) {
                return true;
            }
            b *= i;
        }    
    }
    return false;
}

