//https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

function isPangram(string) {
  const alpha = "abcdefghijklmnopqrstuvwxyz".split("");
  string = string.replace(/\s|\./g, "").toLowerCase();
  return alpha.every((ch) => string.indexOf(ch) !== -1);
}
