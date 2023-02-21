//https://app.codesignal.com/arcade/code-arcade/well-of-integration/fzsCQGYbxaEcTr2bL

function solution(inputArray) {
  let max = 0;
  inputArray.map((el) => {
    if (el.length > max) {
      max = el.length;
    }
  });
  return inputArray.filter((el) => el.length >= max);
}
