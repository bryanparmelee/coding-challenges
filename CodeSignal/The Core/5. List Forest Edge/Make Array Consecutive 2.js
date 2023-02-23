//https://app.codesignal.com/arcade/code-arcade/list-forest-edge/bq2XnSr5kbHqpHGJC

function solution(statues) {
    let count = 0;
    const sorted = statues.sort((a, b) => a - b);
    for (let i = 0; i <= sorted.length - 2; i++) {
        if (sorted[i] + 1 !== sorted[i + 1]) {
            count += sorted[i + 1] - sorted[i] - 1;
        }
    }
    return count;
}
