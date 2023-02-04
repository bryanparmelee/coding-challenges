//https://app.codesignal.com/arcade/code-arcade/labyrinth-of-nested-loops/oL7YuygJKtMSNLeJn

function solution(n) {
    let divisors = [];
    for (let i = 1; i <= n; i++) {
        divisors.push(divisor(i));
    }
    let weakness = [];
    for (let i = divisors.length; i > 0; i--) {
        let rest = divisors.slice(0, i);
        let weak = rest.filter(el => el > divisors[i]);
        weakness.push(weak.length);
    }
    const max = Math.max(...weakness);
    const count = weakness.filter(el => el === max).length;
    return [max, count];
}

function divisor(num) {
    let d = 0
    for (let i = num; i > 0; i--) {
        if (num % i === 0) {
            d++;
        }
    }
    return d;
}


