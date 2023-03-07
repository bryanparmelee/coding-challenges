//https://app.codesignal.com/arcade/code-arcade/spring-of-integration/FvMZwyYRsGaA7Q3A8

function solution(levelNum, levelHeight) {
  let crown = ["*", "*", "***"];
  let foot = Array(levelNum).fill(
    levelHeight % 2 ? "*".repeat(levelHeight) : "*".repeat(levelHeight + 1)
  );
  let levels = [];
  let first = 5;
  while (levelNum) {
    let toAdd = 2;
    let level = Array(levelHeight).fill("*".repeat(first));
    for (let i = 1; i < level.length; i++) {
      level[i] += "*".repeat(toAdd);
      toAdd += 2;
    }
    levels.push(...level);
    first += 2;
    levelNum--;
  }

  const longest = levels[levels.length - 1].length;
  let tree = [...crown, ...levels, ...foot];
  return tree.map((line) => {
    let pad = (longest - line.length) / 2;
    return line.length < longest ? " ".repeat(pad) + line : line;
  });
}
