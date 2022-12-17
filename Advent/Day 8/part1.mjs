const sampleData = `30373
25512
65332
33549
35390`;

const dataArr = sampleData.split(/\n/);

const rows = dataArr.length;
const cols = dataArr[0].length;
let visible = rows * 2 + ((cols - 2) * 2);

const checkLeft = (array, curr, i, j) => {
    if (curr > array[i][j-1]) {
        if (j - 1 === 0) {
            visible += 1;
            console.log(curr + " left");
            return true;
        }  else {
            checkLeft(array, curr, i, j- 1);
        } 
    } return false;
}

const checkRight = (array, curr, i, j) => {
    if (curr > array[i][j+1]) {
        if (j+1 === cols -1) {
            visible += 1;
            console.log(curr + " right");
            return true;
        } else {
            checkRight(array, curr, i, j +1);
        }
    } return false;
}

const checkUp = (array, curr, i, j) => {
    if (curr > array[i - 1][j]) {
        if (i - 1 === 0) {
            visible += 1;
            console.log(curr + " up");
            return true;
        } else {
            checkUp(array, curr, i - 1, j);
        }
    } return false;
}

const checkDown = (array, curr, i, j) => {
    if (curr > array[i + 1][j]) {
        if (i + 1 === rows - 1) {
            visible += 1;
            console.log(curr + " down");
            return true;
        } else {
            checkDown(array, curr, i + 1, j);
        }
    } return false;
}

const check = (array, curr, i, j) => {
    if (checkLeft(array, curr, i, j) === false) {
        if (checkRight(array, curr, i, j) === false) {
            if (checkUp(array, curr, i, j) === false) {
                checkUp(array, curr, i, j);
            } return;
        } return;
    } return;
}


for (let i = 1; i < dataArr.length - 1; i++) {
    for (let j = 1; j < dataArr[i].length - 1; j++) {
        let curr = dataArr[i][j];
        check(dataArr, curr, i, j);        
    }
}



console.log(visible);

// 30373
// 25512
// 65332
// 33549
// 35390

//5 left, 5 right, 5 right, 3 right, 5 left,  