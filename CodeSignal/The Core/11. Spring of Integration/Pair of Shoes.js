//https://app.codesignal.com/arcade/code-arcade/spring-of-integration/picP24ieQnuqR4kxJ

function solution(shoes) {
  let left = [];
  let right = [];
  shoes.map((shoe) => {
    shoe[0] === 0 ? left.push(shoe[1]) : right.push(shoe[1]);
  });
  return (
    left.sort((a, b) => a - b).join("") === right.sort((a, b) => a - b).join("")
  );
}
