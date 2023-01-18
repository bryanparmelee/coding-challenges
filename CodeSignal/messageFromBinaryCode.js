//https://app.codesignal.com/arcade/intro/level-12/sCpwzJCyBy2tDSxKW

function solution(code) {
    let output = [];
    for (let i = 0; i < code.length; i += 8) {
        output.push(code.slice(i, i + 8));
    }
    return output.map(el => {
        return String.fromCharCode(parseInt(el, 2));
    }).join('');  
}