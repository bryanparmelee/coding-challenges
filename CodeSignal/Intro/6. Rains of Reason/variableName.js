//https://app.codesignal.com/arcade/intro/level-6/6Wv4WsrsMJ8Y2Fwno

//Correct variable names consist only of English letters, digits and underscores and they can't start with a digit.

function solution(name) {
    const arr = name.split('');
    const numRegex = /\d/;
    const allRegex = /\d|\w/;
    if (numRegex.test(arr[0])) {
        return false;
    } 
    return arr.every(el => allRegex.test(el));
}