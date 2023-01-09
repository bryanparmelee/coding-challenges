//https://app.codesignal.com/arcade/intro/level-9/xHvruDnQCx7mYom3T 

function solution(upSpeed, downSpeed, desiredHeight) {
    let days = 1;
    let height = upSpeed;
    while (height < desiredHeight) {
        height = height - downSpeed + upSpeed;
        days++;
        console.log(height, days);
    }
    return days;
}