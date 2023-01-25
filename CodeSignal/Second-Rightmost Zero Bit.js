//https://app.codesignal.com/arcade/code-arcade/corner-of-0s-and-1s/9nSj6DgqLDsBePJha

function solution(n) {
    return Math.pow(2, n
        .toString(2).length - 1 - n.toString(2).lastIndexOf('0', n.toString(2).lastIndexOf('0') - 1))
  }