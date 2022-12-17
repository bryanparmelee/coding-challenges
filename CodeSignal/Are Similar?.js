//https://app.codesignal.com/arcade/intro/level-4/xYXfzQmnhBvEKJwXP

const solution = (a, b) => {
    if (a.join('') === b.join('')) {
        return true;
    }

    let arr1 = [];
    let arr2 = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            arr1.push(a[i]);
            arr2.push(b[i]);
        }
    }
    arr2 = arr2.reverse().join('');
    arr1 = arr1.join('');
    return arr1 === arr2 ? true : false;
}



console.log(solution([1, 2, 3], [2, 1, 3]));
console.log(solution([832, 998, 148, 570, 533, 561, 894, 147, 455, 279], [832, 570, 148, 998, 533, 561, 455, 147, 894, 279]));

