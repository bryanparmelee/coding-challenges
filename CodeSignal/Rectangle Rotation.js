//https://app.codesignal.com/arcade/code-arcade/labyrinth-of-nested-loops/tuKA5f3zpzkKKejJx

function solution(a, b) {
    const ld = (a / Math.sqrt(2)) / 2;
    const sd = (b / Math.sqrt(2)) / 2;
    const rectExt = [2 * Math.floor(ld) + 1, 2 * Math.floor(sd) + 1];
    const rectInt = [2 * Math.floor(ld) + (ld % 1 < 0.5 ? 0 : 2), 2 * Math.floor(sd) + (sd % 1 < 0.5 ? 0 : 2)];
    return rectExt[0] * rectExt[1] + rectInt[0] * rectInt[1];
}


console.log()