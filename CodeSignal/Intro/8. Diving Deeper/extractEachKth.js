//https://app.codesignal.com/arcade/intro/level-8/3AgqcKrxbwFhd3Z3R

function solution(inputArray, k) {
    let output = [];
    for (let i = 0; i < inputArray.length; i += k) {
       const chunk = inputArray.slice(i, i + (k-1));
       console.log(chunk);
       output.push(...chunk);
    }
    return output;
}
