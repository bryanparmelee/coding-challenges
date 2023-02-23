//https://app.codesignal.com/arcade/code-arcade/book-market/MX94DWTrwQw2gLrTi

function solution(startTag) {
    let match = startTag.match(/^<(\w+)/);
    return `</${match[1]}>`; 
}

console.log(solution('<html class='));