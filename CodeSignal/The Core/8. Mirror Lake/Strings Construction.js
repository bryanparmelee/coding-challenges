//https://app.codesignal.com/arcade/code-arcade/mirror-lake/chW9F8bCgxYJBcgj3

function solution(a, b) {
    let count = 0;
    let checking = true;
    while (checking) {
        for (i = 0; i < a.length; i++) {
            if (b.includes(a[i])) {
                b = b.replace(a[i], '');
            } else {
                checking = false;
                break;
            }
        }
        if (checking) {
            count++;
        }
    }
    return count;
}