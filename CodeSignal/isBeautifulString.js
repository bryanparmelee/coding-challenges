//https://app.codesignal.com/arcade/intro/level-10/PHSQhLEw3K2CmhhXE

function solution(inputString) {
    let output = true;
    let counts = {};
    const arr = inputString.split('');
    for (let i = 0; i < arr.length; i++) {
        const count = arr.filter(el => el === arr[i]);
        if (!counts[arr[i]]) {
            counts[arr[i]] = count.length;
        }
    }
    const letters = Object.keys(counts);
    letters.map(letter => {
        let prev = letter.charCodeAt() - 1;
        console.log(String.fromCharCode(prev));
        if (counts[letter] > counts[String.fromCharCode(prev)]) {
            output = false;
        } else if (letter !== 'a' && !counts[String.fromCharCode(prev)]) {
            output= false;
        }
    });
    return output;
}