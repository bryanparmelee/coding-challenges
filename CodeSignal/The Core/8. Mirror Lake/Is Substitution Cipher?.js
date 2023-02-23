//https://app.codesignal.com/arcade/code-arcade/mirror-lake/rNrF4v5etMdFNKD3s

function solution(string1, string2) {
    let a; 
    let b;
    let output = string1.length === string2.length; 
    let t = 2;
    let aux;
    let pos;
    while (t--) {
        for (let i = 0; i < string1.length; i++) {
            a = string1[i];
            b = string2[i];
            pos = string1.indexOf(a, i + 1);
            while (pos >= 0) {
                if (string2[pos] !== b) {
                    output = false;
                }
                pos = string1.indexOf(a, pos + 1);
            }
        }
        aux = string1;
        string1 = string2;
        string2 = aux;
    }
    return output;
}


//fails hidden tests
function solution2(string1, string2) {
    let output = true;
    let cipher1 = {};
    let cipher2 = {};
    for (let i = 0; i < string1.length; i++) {
        if (string1[i] !== string2[i]) {
            if (cipher1[string1[i]] && cipher1[string1[i]] !== string2[i]) {
                output = false;
                break;
            } cipher1[string1[i]] = string2[i];
            if (cipher2[string2[i]] && cipher2[string2[i]] !== string1[i]) {
                output = false;
                break;
            } cipher2[string2[i]] = string1[i];
        }
    }
    return output;
}

function solution3(string1, string2) {
    return [...string1].every((el,i) => string1.indexOf(el) === string2.indexOf(string2[i]));
}
 
function solution4(s1,s2) {
    [s1,s2]=[s1,s2].map(s=>[...s].map(c=>s.indexOf(c)).join());
    console.log([s1, s2]);
    return s1===s2
  }

 
