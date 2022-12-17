//https://www.codewars.com/kata/pyramid-slide-down/train/javascript

const longestSlideDown = (pyramid) => {
    let sumPy = [];
    sumPy.push(pyramid[pyramid.length - 1]);
    for (let i = pyramid.length -2; i >= 0; i--) {
        let sums = [];
        for (let j = 0; j < pyramid[i].length; j++) {
            sums.push(pyramid[i][j] + Math.max(sumPy[0][j], sumPy[0][j+1]));                  
        }  sumPy.unshift(sums);
    }
    return sumPy[0][0];
}