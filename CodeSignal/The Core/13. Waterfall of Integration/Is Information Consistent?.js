//https://app.codesignal.com/arcade/code-arcade/waterfall-of-integration/jkuhbNn7AdeCC7z7R

function solution(evidences) {
  return !evidences[0]
    .map((_, y) => evidences.map((x) => x[y]))
    .some((x) => x.includes(1) && x.includes(-1));
}
