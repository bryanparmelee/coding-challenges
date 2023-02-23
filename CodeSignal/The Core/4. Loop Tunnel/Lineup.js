//https://app.codesignal.com/arcade/code-arcade/loop-tunnel/8rqs3BLpdKePhouQM

function solution(commands) {
    let total = 0;
    let same = true;
    for (let i = 0; i < commands.length; i++) {
        same = (!same && commands[i] !== 'A') || (same && commands[i] === 'A');
        if (same) total++;
    }
    return total;
}