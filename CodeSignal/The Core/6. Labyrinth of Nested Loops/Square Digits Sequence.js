//https://app.codesignal.com/arcade/code-arcade/labyrinth-of-nested-loops/MvX84CA5HN6GKqv7R

function solution(a0) {
    let results = [a0];
    let latest = a0;
    while (results.indexOf(latest) === results.lastIndexOf(latest)) {
        latest = latest.toString().split('').map(el => Number(el) ** 2).reduce((a, b) => a + b, 0);
        results.push(latest);
    }
    return results.length;    
}