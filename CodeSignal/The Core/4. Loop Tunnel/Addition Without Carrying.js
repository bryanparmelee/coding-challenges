//https://app.codesignal.com/arcade/code-arcade/loop-tunnel/xzeZqCQjpfDJuN72S

function solution(param1, param2) {
    let output = [];
    const p1Arr = param1.toString().split('').reverse().map(Number);
    const p2Arr = param2.toString().split('').reverse().map(Number);
   
    const shorter = p1Arr.length < p2Arr.length ? p1Arr : p2Arr;
    const longer = shorter === p1Arr ? p2Arr : p1Arr;
  
    for (let i = 0; i < shorter.length; i++) {
        let sum = p1Arr[i] + p2Arr[i]; 
        output.push(sum >= 10 ? sum - 10 : sum);
    }

    let remainder = longer.length - shorter.length;
    while (remainder > 0) {
        output.push(longer[longer.length - remainder]);
        remainder--;
    }
    return Number(output.reverse().join(''));
}