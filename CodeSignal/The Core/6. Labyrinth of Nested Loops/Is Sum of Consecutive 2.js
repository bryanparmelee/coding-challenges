//https://app.codesignal.com/arcade/code-arcade/labyrinth-of-nested-loops/EQSjA5PRfyHueeNkj

function solution(n) {
    let count = 0;
    for (let i = 1; i < n / 2; i++) {
        let sum = i;
        for (let next = i + 1; sum < n; next++) {
            sum += next;
        }
    
        if (sum === n) {
            count++;
        }
    }
    return count;
}


console.log(solution(99));