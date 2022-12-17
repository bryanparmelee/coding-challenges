const sampleStacks = `
[D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 
 `;

const sampleMoves = `move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;




const moveStrings = sampleMoves.split(/\n/);

let numberMoves = [];

moveStrings.map(item => {
    let numbers = [];
    const amount = Number(item.substring(5, 7));
    const from = Number(item.substring(12, 14));
    const to = Number(item.substring(item.length - 1));
    numbers.push(amount, from, to);
    numberMoves.push(numbers);
});

const stacks = [
    ['D', 'N', 'Z'],
    ['C', 'M'],
    ['P']
];

const makeMoves = (amount, from, to) => {
    const toMove = stacks[from - 1].slice(0, amount);
    stacks[to - 1].unshift(toMove);
    stacks[from - 1].splice(0, amount);

}

numberMoves.map(item => {
    makeMoves(item[0], item[1], item[2]);
});

console.log(stacks);