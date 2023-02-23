//https://app.codesignal.com/arcade/code-arcade/mirror-lake/kGeuCkJNbqczCCqgg

function solution(a) {
  const divs = a.map((el) => Math.ceil(el / 10000));
  const set = new Set(divs);
  return set.size + a.length;
}
