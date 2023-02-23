//https://app.codesignal.com/arcade/intro/level-7/vExYvcGnFsEYSt8nQ

function solution(n, firstNumber) {
    let circle = [];
    while (n > 0) {
        circle.unshift(n - 1);
        n--;
    }
    const halfway = circle.length / 2;
    const start = circle.indexOf(firstNumber);
    const firstSlice = circle.slice(start);
    const secondSlice = circle.slice(0, start)
    const updatedCircle = [...firstSlice, ...secondSlice];
    return updatedCircle[halfway];
}

function solution2(n, firstNumber) {
    return (firstNumber + n / 2) % n;
    }