//https://app.codesignal.com/arcade/intro/level-10/HJ2thsvjL25iCvvdm

function solution(inputString) {   
    const arr = inputString.split('-');
    if (arr.length !== 6) {
       return false;
    }
    const fails = arr.filter(el => !hexCheck(el));
    return fails.length === 0;
}

const regex = /[0-9]|[A-F]/;
const hexCheck = (str) => {
    if (str.length !== 2) {return false;}
    return regex.test(str[0]) && regex.test(str[1])
}

