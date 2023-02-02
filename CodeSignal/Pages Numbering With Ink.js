//https://app.codesignal.com/arcade/code-arcade/labyrinth-of-nested-loops/pdw3izd7SpMTBJqSy

function solution(current, numberOfDigits) {
    let printed;
    while(numberOfDigits >= current.toString().length) {
        printed = current;
        numberOfDigits -= current.toString().length;       
        current++;
    }
    return printed;
}
