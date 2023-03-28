//https://app.codesignal.com/arcade/code-arcade/sorting-outpost/2SFFWqkhkqC7mMBse

function solution(a) {
  return a
    .map((e, i) => {
      let max = Math.max(
        ...e
          .toString()
          .split("")
          .map((z) => parseInt(z))
      );
      let min = Math.min(
        ...e
          .toString()
          .split("")
          .map((z) => parseInt(z))
      );
      return { idx: i, diff: max - min };
    })
    .sort((k, t) => k.diff - t.diff || t.idx - k.idx)
    .map((e) => a[e.idx]);
}
