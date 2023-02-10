//https://app.codesignal.com/arcade/code-arcade/book-market/K2ieDm98sPDzzMepz

function solution(inputString) {

    let arr = inputString.split('');
    arr.push(')');
    arr.unshift('(');
    return arr.join('');
}