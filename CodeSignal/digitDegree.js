//https://app.codesignal.com/arcade/intro/level-9/hoLtYWbjdrD2PF6yo

function solution(n) {
    if (n < 10) {return 0;}
    let times = 1;
    const degreeCheck = (number) => {
        const arr = number.toString().split('');
        const sum = arr.reduce((a, b) => {
        return Number(a) + Number(b);
    }, 0);
        if (sum >= 10) {
            times++;
            return degreeCheck(sum);
        } else {
            return times;
        }
    }
    return degreeCheck(n);
}

