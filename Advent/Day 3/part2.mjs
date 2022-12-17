// https://adventofcode.com/2022/day/3

import { fullData, sampleData } from "./data.mjs";

const newData2 = fullData.replace(/\n/g, ',').split(',');
const thirds = [];

for (let i = 0; i < newData2.length; i += 3 ) {
    thirds.push(newData2.slice(i, i + 3));
}

const values2 = thirds.map((item) => {
    let priority = '';
    for (let i = 0; i < item[0].length; i++) {
        let curr = item[0][i];
        if (item[1].includes(curr) && item[2].includes(curr)) {
            priority = curr;
        }
    }
    let charCode = priority.charCodeAt(0);  
    if (charCode < 97) {
        return charCode - 38;
    }   return charCode - 96;
});

const total2 = values2.reduce((a, b) => a + b);

console.log(total2);