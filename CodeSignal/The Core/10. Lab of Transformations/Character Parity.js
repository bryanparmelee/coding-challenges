//https://app.codesignal.com/arcade/code-arcade/lab-of-transformations/QKnGhkoi4wKr6xY9b

function solution(symbol) {
  return isNaN(symbol)
    ? "not a digit"
    : Number(symbol) % 2 === 0
    ? "even"
    : "odd";
}
