import { sampleData } from "./data.mjs";

const dataArr = sampleData.split(/\n/);

const numArr = dataArr.map(item => {
    if (item !== 'noop') {
        return Number(item.replace('addx ', ''));
    } return item;
});

const cycleCheck = (cycle, strength, reg) => {
    if (cycle === 20 || (cycle - 20) / 40 === 0) {
        strength = strength + (cycle * reg);
        return strength;
    }
}

const runProgram = (arr) => {
    let strength = 0;
    let reg = 1;
    let cycle = 0;
    for (let i = 0; i < arr.length; i++) { 
        if (arr[i] === 'noop') {
            cycle += 1;
            cycleCheck(cycle, strength, reg);
        } else {
            cycle += 1;
            cycleCheck(cycle, strength, reg);
            reg += arr[i];
            cycle += 1;
            cycleCheck(cycle, strength, reg);
        }     
    } 
    return strength;
}

console.log(runProgram(numArr));

