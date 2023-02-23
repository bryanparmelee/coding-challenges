//https://app.codesignal.com/arcade/intro/level-7/PTWhv2oWqd6p4AHB9

function solution(inputArray) {
    
    const diffChecker = (str1, str2) => {
        let diff = 0;
        for (let i = 0; i < str1.length; i++) {
            if (str1[i] !== str2[i]) {
                diff++;
            }
        }
        return diff === 1 ? true : false;   
    }

    const arrangedChecker = (arr) => {
        let arranged = true;
        for (let i = 0; i < arr.length - 1; i++) {
            if (!diffChecker(arr[i], arr[i+1])) {
                arranged = false;
                break;
            }
        }
        return arranged;
    }

    const findNext = (str, arr) => {
        let index = -1;
        for (let i = 0; i < arr.length; i++) {
            if (diffChecker(str, arr[i])) {
                index = i;
                break;
            }
        }
        return index;
    }

    let next = 0;
    inputArray.sort();
    for (let i = 0; i < inputArray.length && next >= 0 && !arrangedChecker(inputArray); i++) {
        next = findNext(inputArray[i], inputArray);
        if (next >= 0 && (next > i + 1|| next < i - 1)) {
            inputArray.splice(i + 1, 0, inputArray[next])
            if (next < i + 1) {
                inputArray.splice(next, 1);
            } else {
                inputArray.splice(next + 1, 1);
            }
        }
    }
    return arrangedChecker(inputArray);

}
