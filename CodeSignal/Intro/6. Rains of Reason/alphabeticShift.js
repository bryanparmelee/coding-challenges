//https://app.codesignal.com/arcade/intro/level-6/PWLT8GBrv9xXy4Dui

function solution(str) {
    let output = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'z') {
            output += 'a';
        } else {
        const next = str.charCodeAt(i) + 1;
        output += String.fromCharCode(next);
        }
    }
    return output;
}
