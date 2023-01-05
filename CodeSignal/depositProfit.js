//https://app.codesignal.com/arcade/intro/level-7/8PxjMSncp9ApA4DAb

function solution(deposit, rate, threshold) {
    let years = 0;
    while (deposit < threshold) {
        deposit += deposit * (rate / 100);
        years++
    }
    return years
}