//https://app.codesignal.com/arcade/code-arcade/loop-tunnel/LAKReA3CR9EwkZGSz

function solution(candlesNumber, makeNew) {
    let burned = 0;
    let leftovers = 0;
    while (candlesNumber) {
        burned += candlesNumber;
        leftovers += candlesNumber;
        candlesNumber = Math.floor(leftovers / makeNew);
        leftovers = leftovers % makeNew; 
    }
    return burned;
}