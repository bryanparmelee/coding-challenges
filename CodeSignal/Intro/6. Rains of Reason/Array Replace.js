function solution(inputArray, elemToReplace, substitutionElem) {
  let output = [];
  inputArray.map((el) => {
    if (el === elemToReplace) {
      output.push(substitutionElem);
    } else {
      output.push(el);
    }
  });
  return output;
}
