function permutations(string) {
	let result = [];
    const strArray = string.split('');
    for (let i = 0; i < strArray.length; i++) {
        let prem = '';
        prem += strArray[i];
        for (let j = strArray.length - 1; j >= 0; j--) {
            if (j !== i ) {
                prem += strArray[j];
            } 
       }
       console.log(prem);
       result.push(prem);
    }
    return result;
}

console.log(permutations('ab'));
console.log(permutations('aabb'));

//https://www.codewars.com/kata/5254ca2719453dcc0b00027d/train/javascript