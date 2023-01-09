//https://app.codesignal.com/arcade/intro/level-9/AACpNbZANCkhHWNs3

function solution(inputString) {
    let output = '';
    let arr = inputString.split('');
    if (arr[0] === ' ') {
       return '';
    } else {
        arr = arr.map(el => Number(el));
    }
    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
            break;
        }  output += arr[i];
    }
    return output;
}