// https://adventofcode.com/2022/day/2

import { fullData } from "./data.mjs"; 

const newData = fullData.replace(/\n/g, ',').split(',');
const matchUps = newData.map(item => {
    return item.split(' ');
})

const playRound = (a, b) => {
    let score = 0;
    if (b === 'X') {score += 1;}
    if (b === 'Y') {score += 2;}
    if (b === 'Z') {score += 3;}
    if (a === 'A' && b === 'X') {score += 3;}
    if (a === 'A' && b === 'Y') {score += 6;}
    if (a === 'B' && b === 'Y') {score += 3;}
    if (a === 'B' && b === 'Z') {score += 6;}
    if (a === 'C' && b === 'Z') {score += 3;}
    if (a === 'C' && b === 'X') {score += 6;}
    return score;
}


const scores = matchUps.map((item) => playRound(item[0], item[1]));
const total = scores.reduce((a, b) => a + b);

console.log(total);