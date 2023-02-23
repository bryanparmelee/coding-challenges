//https://app.codesignal.com/arcade/intro/level-5/ZMR5n7vJbexnLrgaM

function solution(matrix) {
    let output = [];
    const height = matrix.length;
    const width = matrix[0].length;
    for (let y = 0; y < height; y++) {
        let yCount = [];
        for (let x = 0; x < width; x++) {
            let count = 0;
            if (y > 0) {
                if(matrix[y-1][x-1]) count += 1;
                if(matrix[y-1][x]) count += 1;
                if(matrix[y-1][x+1]) count += 1;
            }

            if (y < height -1) {
                if(matrix[y+1][x-1]) count += 1;
                if(matrix[y+1][x]) count += 1;
                if(matrix[y+1][x+1]) count += 1;
            }

            if (matrix[y][x-1]) count += 1;
            if (matrix[y][x+1]) count += 1;
            yCount.push(count);
        }
        output.push(yCount);
    }
    return output;
}