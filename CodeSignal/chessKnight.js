//https://app.codesignal.com/arcade/intro/level-11/pwRLrkrNpnsbgMndb

function solution(cell) {
    const x = cell.charCodeAt(0) - 96;
    const y = Number(cell[1]); 
    console.log(x, y);
    let moves = [];
    moves.push([x+2, y+1]);
    moves.push([x+2, y-1]);
    moves.push([x-2, y+1]);
    moves.push([x-2, y-1]);
    moves.push([x+1, y+2]);
    moves.push([x+1, y-2]);
    moves.push([x-1, y+2]);
    moves.push([x-1, y-2]);
    const filtered = moves.filter(el => {
        return el[0] > 0 && 
               el[1] > 0 &&
               el[0] < 9 &&
               el[1] < 9;
    })
    return filtered.length; 
}

