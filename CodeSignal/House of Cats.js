//https://app.codesignal.com/arcade/code-arcade/well-of-integration/RaWLwT2eb96hp4N5Z

function solution(legs) {
  let output = [];
  if (legs % 4 === 0) {
    output.push(0);
  }
  for (let h = 1; h * 2 <= legs; h++) {
    let sum = h * 2;
    if (sum === legs) {
      output.push(h);
    } else {
      while (sum < legs) {
        sum += 4;
        if (sum === legs) {
          output.push(h);
        }
      }
    }
  }
  return output;
}

console.log(solution(6));
