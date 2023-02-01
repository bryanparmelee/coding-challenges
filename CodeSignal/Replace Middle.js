//https://app.codesignal.com/arcade/code-arcade/list-forest-edge/APD5T5CybxTtfkdjL

function solution(arr) {
    let half = Math.floor(arr.length / 2);
    if (arr.length % 2 === 0) {
        let middle = arr[half] + arr[half - 1];
        arr.splice((half - 1), 2, middle);
    }
    return arr;
}


