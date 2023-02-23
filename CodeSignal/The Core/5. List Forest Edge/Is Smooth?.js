//https://app.codesignal.com/arcade/code-arcade/list-forest-edge/3LmZafR9wMCWpdgra

function solution(arr) {
    let half = Math.floor(arr.length / 2);
    let middle = arr[half] + (arr.length % 2 ? 0 : arr[half - 1]);
    return arr[0] === middle && middle === arr[arr.length - 1];
}

