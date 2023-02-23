//https://app.codesignal.com/arcade/intro/level-7/ZFnQkq9RmMiyE6qtq

//abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x) 


function solution(a) {
    let results = [];
    for (let i = 0; i < a.length; i++) {
        const x = a[i];
        results.push(a.reduce((acc, curr) => (Math.abs(curr - x) + acc), 0));
    }
    const lowest = Math.min(...results);
    const lowestIndex = results.indexOf(lowest);
    return a[lowestIndex];
}
