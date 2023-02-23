//https://app.codesignal.com/arcade/code-arcade/mirror-lake/BsShkFDfbkWxozmMN

function solution(s, t) {
    let output= 0;
    let arr = [...s]; 
    for (let i = 0; i < t.length; i++) {
        if (arr.includes(t[i])) {
            arr.splice(arr.indexOf(t[i]), 1);
        } else {
            output++;
        }
    }
    return output;
}

function solution2(s, t) {
    [...s].map(el => {
        t = t.replace(el, '');
    })
    return t.length;
}