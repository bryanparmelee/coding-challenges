//https://app.codesignal.com/arcade/code-arcade/corner-of-0s-and-1s/6SLJChm9N3fEgr2R7

function solution(n, m) {
    return ~(n ^ m) & ((n ^ m) + 1);
  }

