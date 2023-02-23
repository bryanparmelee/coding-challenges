//https://app.codesignal.com/arcade/intro/level-12/fQpfgxiY6aGiGHLtv

function solution(matrix) {
    let squares = [];
    for (let y = 0; y < matrix.length - 1; y++) {
        for (let x = 0; x < matrix[0].length - 1; x++) {
            const square = [matrix[y][x], matrix[y][x+1], matrix[y+1][x], matrix[y+1][x+1]].join('');
            if (!squares.includes(square)) {
                squares.push(square);
            }           
        }
    }
    return squares.length;
}
