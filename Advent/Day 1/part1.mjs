// https://adventofcode.com/2022/day/1

import { fullData } from "./data.mjs";

const newData = fullData.replace(/\n/g, '');
const newArray = newData.split(/\s{6,}/g);
const nextArray = newArray.map(item => item.replace(/\s{3,}/g, ','));
const finalArray = nextArray.map(item => item.split(','));
let finalNumArray = [];
finalArray.map(item => {
    let numArray = [];
    for(let i = 0; i < item.length; i++) {        
        numArray.push(parseInt(item[i]));
    }
    finalNumArray.push(numArray);
})

const sums = finalNumArray.map(item => {
    return item.reduce((a, b) => a + b);
})

const biggest = Math.max(...sums);

console.log(biggest);