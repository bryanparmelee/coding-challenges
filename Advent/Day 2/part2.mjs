// https://adventofcode.com/2022/day/2

import { fullData } from "./data.mjs"; 

const newData = fullData.replace(/\n/g, ',').split(',');
const matchUps = newData.map(item => {
    return item.split(' ');
})

const playRoundUpdate = (a, b) => {
    let score = 0;
    if (a === 'A' && b === 'X') {score += 3;}
    if (a === 'A' && b === 'Y') {score += 4;}
    if (a === 'A' && b === 'Z') {score += 8;}
    if (a === 'B' && b === 'X') {score += 1;}
    if (a === 'B' && b === 'Y') {score += 5;}
    if (a === 'B' && b === 'Z') {score += 9;}
    if (a === 'C' && b === 'X') {score += 2;}
    if (a === 'C' && b === 'Y') {score += 6;}
    if (a === 'C' && b === 'Z') {score += 7;}
    return score;
}

const updatedScore = matchUps.map((item) => playRoundUpdate(item[0], item[1]));
const updatedTotal = updatedScore.reduce((a, b) => a + b);

console.log(updatedTotal);