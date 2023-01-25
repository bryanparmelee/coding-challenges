//https://app.codesignal.com/arcade/code-arcade/corner-of-0s-and-1s/dShYZZT4WmvpmfpgB

function solution(n) {
    return parseInt(
        ((n.toString(2).length % 2 ? "0" : "") + n.toString(2))  
        .match(/\d{2}/g)
        .map(el => {
            return el
                .split('')
                .reverse()
                .join('')
        })
        .join(''), 2);       
  }