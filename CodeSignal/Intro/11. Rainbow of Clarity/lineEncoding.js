//https://app.codesignal.com/arcade/intro/level-11/o2uq6eTuvk7atGadR 

function solution(s) {
    let output = '';
    let count = 1;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i+1]) {
            count++;
        } else {
            output += count > 1 ? count + s[i] : s[i]; 
            count = 1;
        }
    }
    return output;
}
