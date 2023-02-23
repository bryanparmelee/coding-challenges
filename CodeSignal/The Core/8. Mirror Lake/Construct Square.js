//https://app.codesignal.com/arcade/code-arcade/mirror-lake/EeKpdMQXpBkgWjcvt

function solution(s) {
  const min = Number(
    "1" +
      Array(Math.floor((s.length - 1) / 2))
        .fill(0)
        .join("")
  );
  const max = Number(
    Array(Math.ceil(s.length / 2))
      .fill(9)
      .join("")
  );
  const d = getDigitsCount(s);
  for (let i = max + 1; i >= min - 1; i--) {
    if (getDigitsCount(String(i * i)) === d) return i * i;
  }
  return -1;

  function getDigitsCount(str) {
    let d = [];
    while (str.length) {
      let c = str[0];
      d.push(str.length - (str = str.replace(new RegExp(c, "g"), "")).length);
    }
    return d.sort((a, b) => b - a).join("");
  }
}
