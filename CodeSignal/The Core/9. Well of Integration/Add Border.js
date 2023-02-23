//https://app.codesignal.com/arcade/code-arcade/well-of-integration/ZCD7NQnED724bJtjN

function solution(picture) {
  const padded = picture.map((el) => {
    return (el = "*" + el + "*");
  });
  let top = "*".repeat(picture[0].length + 2);
  padded.push(top);
  padded.unshift(top);
  return padded;
}
