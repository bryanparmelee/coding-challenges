//https://app.codesignal.com/arcade/intro/level-4/xvkRbxYkdHdHNCKjg

function solution(inputArray) {
    let moves = 0;
    let solArr = [...inputArray];
    for (let i = 0; i < solArr.length; i++) {
        while (solArr[i] >= solArr[i + 1]) {
            solArr[i + 1]++;
            moves++;
        }
    }

    return moves;
}


