//https://app.codesignal.com/arcade/code-arcade/regular-hell/AMx2WqCoq2PEcJTEp

function solution(s) {
  return s.replace(/(\w+)\s(\w+)/g, "$2 $1");
}

console.log(solution("CodeFight On"));
