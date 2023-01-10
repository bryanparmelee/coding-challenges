//https://app.codesignal.com/arcade/intro/level-9/6M57rMTFB9MeDeSWo 

function solution(bishop, pawn) {
    const a = Math.abs(bishop.charCodeAt(0) - pawn.charCodeAt(0));
        const b = Math.abs(Number(bishop[1]) - Number(pawn[1]));
        return a === b
}