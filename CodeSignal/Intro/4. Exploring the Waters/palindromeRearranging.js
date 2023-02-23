//https://app.codesignal.com/arcade/intro/level-4/Xfeo7r9SBSpo3Wico

function solution(inputString) {
    const arr = inputString.split('');
    let counts = [];
    arr.map(el => {
        if(counts[el]) {
            counts[el]++
        } else {
            counts[el] = 1;
        }
    })   
    let odds = 0;
    for (const props in counts) {
        const value = counts[props];
        if (value % 2 !== 0) {
            odds++;
        }  
  }
  return odds <= 1;
}


