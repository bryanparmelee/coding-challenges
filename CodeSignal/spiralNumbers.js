//https://app.codesignal.com/arcade/intro/level-12/uRWu6K8E7uLi3Qtvx

function solution(n) {
    let output = Array(n).fill().map(() => Array(n).fill());
    let count = 1;
    let colStart = 0;
    let colEnd = n-1;
    let rowStart = 0;
    let rowEnd = n-1;
    while (colStart <= colEnd && rowStart <= rowEnd) {
        for (let y = colStart; y <= colEnd; y++) {
            output[rowStart][y] = count;
            count++;
        }

        rowStart++;

        for (let x = rowStart; x <= rowEnd; x++) {
            output[x][colEnd] = count;
            count++;
        }

        colEnd--;

        for (let y = colEnd; y >= colStart; y--) {
            output[rowEnd][y] = count;
            count++;
        }

        rowEnd--;

        for (let x = rowEnd; x >= rowStart; x--) {
            output[x][colStart] = count;
            count++;
        }
        colStart++;
    }
    return output;
}
