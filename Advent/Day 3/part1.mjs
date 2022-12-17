// https://adventofcode.com/2022/day/3

import { fullData, sampleData } from "./data.mjs";

const newData = fullData.replace(/\n/g, ',').split(',');

const values = newData.map((item) => {
    let halfway = item.length / 2;
    let priority = '';
    for (let i = 0; i < halfway; i++) {      
        if (item.indexOf(item[i]) !== item.lastIndexOf(item[i]) && item.lastIndexOf(item[i]) >= halfway) {
            priority = item[i];
        }
      
    }
    let charCode = priority.charCodeAt(0);  
    if (charCode < 97) {
        return charCode - 38;
    }   return charCode - 96;
})

const total = values.reduce((a, b) => a + b);

console.log(total);