// https://adventofcode.com/2022/day/4

import { sampleData, fullData } from "./data.mjs";

const newData = fullData.replace(/\n/g, 'n').split('n');
const ranges = newData.map(item => item.split(','));

let count = 0;

const getRange = (str) => {
    let edges = str.split('-');
    let start = Number(edges[0]);
    let end = Number(edges[1]);
    return [start, end];
}

ranges.map(item => {
    let x = getRange(item[0]);
    let y = getRange(item[1]);

    if (x[0] >= y[0] && x[0] <= y[1]) {
        count += 1;
    } else if (y[0] >= x[0] && y[0] <= x[1]) {
        count += 1;
    } else {
        return;
    }
})

console.log(count);