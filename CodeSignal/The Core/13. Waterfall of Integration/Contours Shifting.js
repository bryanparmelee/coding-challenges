//https://app.codesignal.com/arcade/code-arcade/waterfall-of-integration/LfP67YRDw2rxoLmeP

function solution(matrix) {
  let positions = new Array(matrix.length)
    .fill("")
    .map((x, i) =>
      new Array(matrix[0].length).fill("").map((x2, i2) => [i, i2])
    );
  let output = matrix.map((x) => x.map((x) => x));
  let contoursVals = contourGen(matrix);
  let contoursPos = contourGen(positions);
  let shifted = contoursVals.map((x, i) => {
    i % 2 === 0 ? x.unshift(x.pop()) : x.push(x.shift());
    return x;
  });
  contoursPos.map((x, i) =>
    x.map((x2, i2) => (output[x2[0]][x2[1]] = shifted[i][i2]))
  );
  return output;
}

function contourGen(matrix) {
  let contours = [];
  while (matrix.length > 1 && matrix[0].length > 1) {
    contours.push([
      ...matrix.shift(),
      ...matrix.map((x) => x.pop()),
      ...matrix.pop().reverse(),
      ...matrix.map((x) => x.shift()).reverse(),
    ]);
  }
  if (matrix[0] !== undefined) {
    if (matrix.length === 1 && matrix[0].length >= 1) {
      matrix[0].unshift(matrix[0].pop());
      contours.push(...matrix);
    } else if (matrix[0].length === 1 && matrix.length >= 1) {
      matrix.unshift(matrix.pop());
      contours.push([...matrix.map((x) => x[0])]);
    }
  }
  return contours;
}

//clockwise even, counter odd
