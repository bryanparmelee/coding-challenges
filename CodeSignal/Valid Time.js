//https://app.codesignal.com/arcade/intro/level-12/ywMyCTspqGXPWRZx5

function solution(time) {
    const digits = time.match(/\d+/g);
    return digits[0] < 24 && digits[1] < 60;
}

