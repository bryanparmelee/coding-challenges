//https://app.codesignal.com/arcade/intro/level-5/veW5xJednTy4qcjso

function solution(inputString) {
    const inputArr = inputString.split('.');
    if (inputArr.includes('')){return false;}
    const numArr = inputArr.filter(item => {
        if (item[0] === '0' && item.length > 1) {
            return false;
        } else if (Number(item) >= 0 && Number(item) <= 255)
        return true;
    })
    return numArr.length === 4;
}